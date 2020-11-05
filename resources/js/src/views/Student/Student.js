import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import EventNoteIcon from '@material-ui/icons/EventNote';
import Notification from '../../components/Notification/Notification';
import StudentService from "../../services/student.service";
import { useLocation } from 'react-router-dom'
import MaterialTable, { MTableToolbar } from "material-table";
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { TABLE_ICONS } from "../../_constants/meterial-ui";
import {DeleteDialogBox, ImageDialogBox} from "../../_constants/utilities.constants";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = {
    headerContainer : {
        color: '#FFF',
        margin: '0 15px',
        padding:'0',
        position: 'relative'
    },

    svg : {
        width: '24px',
        height: '24px',
        margin: '5px 4px 0px',
        textAlign: 'center',
        lineHeight: '33px'
    },
    header : {
        float: 'left',
        padding: '15px',
        marginTop: '-35px',
        marginRight: '15px',
        borderRadius: '3px',
        background: 'linear-gradient(60deg, #ec407a, #d81b60)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(233, 30, 99,.4)'
    },
    tableTitle : {
        color: '#3C4858',
        marginTop: '15px',
        minHeight: 'auto',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: '300',
        marginBottom: '0px',
        textDecoration: 'none'
    },
    absolute : {
        float: 'right',
        marginTop: '20px',
        marginRight: '20px',
    }
};

const useStyles = makeStyles(styles);

function Student(props) {
    let location = useLocation();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
    const [isArchiveDialogOpen, setIsArchiveDialogOpen] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState({ image: '', id: 0 });


    const tableRef = useRef();

    const handleClickOpen = () => {
        props.history.push(location.pathname +"/add");

    };

    const handleCloseArchiveDialog = () => {
        setIsArchiveDialogOpen(false);
    };

    const handleCloseImageDialog = () => {
        setIsImageDialogOpen(false);
    };

    const handleDelete = async (currentSelectedItem) => {
        setIsLoading(true);
        try {
            if (currentSelectedItem.id) {
                const student = await StudentService.delete(currentSelectedItem.id);
                Notification.DataUpdatedSuccess("Deleted");
                setIsArchiveDialogOpen(false);
                setIsLoading(false);
                tableRef.current.onQueryChange();
            }
        } catch (err) {
            setIsLoading(false);
            Notification.DataUpdatedFailed("Student");
        }
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                                <div className={classes.headerContainer}>
                                    <div className={classes.header}>
                                        <EventNoteIcon className={classes.svg} />
                                    </div>
                                    <h4 className={classes.tableTitle}>Student</h4>
                                </div>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={8}>
                                <Button
                                    variant="contained"
                                    onClick={handleClickOpen}
                                    size="small"
                                    color="primary"
                                    className={classes.absolute}
                                    startIcon={<AddIcon />}

                                >Add</Button>

                            </GridItem>
                        </GridContainer>

                        <CardBody>
                            <MaterialTable
                                tableRef={tableRef}
                                title={<div style={{ padding: '10px 10px' }}>
                                </div>}
                                components={{
                                    Toolbar: props => (
                                        <div style={{ backgroundColor: '#e8eaf5' }}>
                                            <MTableToolbar {...props} />
                                        </div>
                                    ),

                                }}
                                icons={TABLE_ICONS}
                                columns={[
                                    {
                                        title: 'First Name',
                                        field: 'first_name'
                                    },
                                    {
                                        title: 'Last Name',
                                        field: 'last_name'
                                    },
                                    {
                                        title: 'Nic | Passport',
                                        field: 'nic_or_passport_no',
                                    },

                                ]}
                                data={query =>
                                    new Promise((resolve, reject) => {
                                        StudentService.getAll(query.pageSize, query.page, query.search)
                                            .then(response => response)
                                            .then(result => {
                                                resolve({
                                                    data: result.data,
                                                    page: result.meta.current_page - 1,
                                                    totalCount: result.meta.total,
                                                })
                                            })
                                    })
                                }
                                actions={[
                                    {
                                        icon: () => <VisibilityIcon style={{ color: '#d500f9'}}/>,
                                        tooltip: 'View Student',
                                        onClick: (event, rowData) => {
                                            props.history.push("/student/view/" + rowData.id);
                                        }
                                    },
                                    {
                                        icon: () => <Edit color="primary" />,
                                        tooltip: 'Edit Student',
                                        onClick: (event, rowData) => {
                                            props.history.push("/student/edit/" + rowData.id);

                                        }
                                    },
                                    {
                                        icon: () => <DeleteIcon color="secondary" />,
                                        tooltip: 'Delete Student',
                                        onClick: (event, rowData) => {
                                            setIsArchiveDialogOpen(true);
                                            setCurrentSelectedItem(rowData);
                                        }
                                    }
                                ]}
                                options={{
                                    actionsColumnIndex: -1,
                                    pageSize: 5,

                                }}
                            />

                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>

            <ImageDialogBox
                open={isImageDialogOpen}
                handleClose={handleCloseImageDialog}
                folderName='news'
                currentSelectedItem={currentSelectedItem}
            />
            <DeleteDialogBox
                open={isArchiveDialogOpen}
                handleClose={handleCloseArchiveDialog}
                currentSelectedItem={currentSelectedItem}
                isLoading={isLoading}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default Student;