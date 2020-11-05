import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import EventNoteIcon from '@material-ui/icons/EventNote';
import Notification from '../../components/Notification/Notification';
import NewsService from "../../services/news.service";
import { useLocation } from 'react-router-dom'
import MaterialTable, { MTableToolbar } from "material-table";
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { TABLE_ICONS } from "../../_constants/meterial-ui";
import {DeleteDialogBox, ImageDialogBox} from "../../_constants/utilities.constants";
import AddIcon from '@material-ui/icons/Add';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Button from '@material-ui/core/Button';

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

function News(props) {
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
                const news = await NewsService.delete(currentSelectedItem.id);
                Notification.DataUpdatedSuccess("News deleted");
                setIsArchiveDialogOpen(false);
                setIsLoading(false);
                tableRef.current.onQueryChange();
            }
        } catch (err) {
            setIsLoading(false);
            Notification.DataUpdatedFailed("News");
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
                                    <h4 className={classes.tableTitle}>News</h4>
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
                                        title: 'TITLE',
                                        field: 'title'
                                    },
                                    {
                                        title: 'POSTED BY',
                                        field: 'posted_by'
                                    },
                                    {
                                        title: 'POSTED ON',
                                        field: 'posted_on',
                                    },
                                
                                ]}
                                data={query =>
                                    new Promise((resolve, reject) => {
                                        NewsService.getAll(query.pageSize, query.page, query.search)
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
                                        icon: () => <PhotoLibraryIcon color="primary" />,
                                        tooltip: 'Edit News',
                                        onClick: (event, rowData) => {
                                            props.history.push("/news/images/" + rowData.id);

                                        }
                                    },
                                    {
                                        icon: () => <Edit color="primary" />,
                                        tooltip: 'Edit News',
                                        onClick: (event, rowData) => {
                                            props.history.push("/news/edit/" + rowData.id);

                                        }
                                    },
                                    {
                                        icon: () => <DeleteIcon color="secondary" />,
                                        tooltip: 'Delete News',
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

export default News;