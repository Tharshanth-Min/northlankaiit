import React, {useState, useEffect, useRef} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
import Button from "../../../../components/CustomButtons/Button";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import Notification from '../../../../components/Notification/Notification';
import GalleryTypeService from "../../../../services/galleryType.service";
import { useLocation } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MaterialTable, { MTableToolbar, Chip } from "material-table";
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { TABLE_ICONS } from "../../../../_constants/meterial-ui";
import { withRouter } from 'react-router-dom';


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
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
    button : {
        float: 'right',
        padding: '12px',
        marginTop: '20px',
        marginRight: '20px',
        borderRadius: '3px',
    },
    uploadButton : {
        float: 'right',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '20px',
        paddingLeft: '20px',
        borderRadius: '25px',
        background: 'linear-gradient(60deg, #ec407a, #d81b60)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(233, 30, 99,.4)'
    },
    removeButton : {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '15px',
        paddingLeft: '15px',
        borderRadius: '25px',
        background: '#ff5722',

    },
    ImgWrapper : {
        float: 'left',
        marginTop: '20px',
        marginRight: '20px',
        borderRadius: '3px',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(233, 30, 99,.4)'
    },
    large: {
        width: "300px",
        height: "160px",
        borderRadius : "5%"
    },
    loader: {
        width: '100%',
        '& > * + *': {
            marginTop: "10px",
        },
    },
};

const useStyles = makeStyles(styles);

function GalleryTypeTabPanel(props) {
    let location = useLocation();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [isArchiveDialogOpen, setIsArchiveDialogOpen] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState({ title: '', id: 0 });

    const tableRef = useRef();


    const handleClickOpen = () => {
        props.history.push("gallery-type/add");

    };

    const handleCloseArchiveDialog = () => {
        setIsArchiveDialogOpen(false);
    };

    const handleDeleteGalleryType = async (currentSelectedItem) => {
        setIsLoading(true);
        try {
            if (currentSelectedItem.id) {
                const galleryType = await GalleryTypeService.delete(currentSelectedItem.id);
                setIsLoading(false);
                Notification.DataUpdatedSuccess("GalleryType deleted");
                setIsArchiveDialogOpen(false);
                tableRef.current.onQueryChange();
            }
        } catch (err) {
            Notification.DataUpdatedFailed("GalleryType");
        }
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            {isLoading ? (
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                > <CircularProgress color="primary"/></Grid>
                            ):(
                                <MaterialTable
                                    tableRef={tableRef}
                                    title={<div style={{ padding: '10px 10px' }}>
                                        <Button className={classes.button} color="rose" onClick={handleClickOpen}>Add GalleryType</Button>
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
                                            title: 'Id',
                                            field: 'id'
                                        },
                                        {
                                            title: 'Type',
                                            field: 'type'
                                        }
                                    ]}
                                    data={query =>
                                        new Promise((resolve, reject) => {
                                            GalleryTypeService.getAll(query.pageSize, query.page, query.search)
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
                                            icon: () => <Edit />,
                                            tooltip: 'Edit GalleryType',
                                            onClick: (event, rowData) => {
                                                props.history.push("gallery-type/edit/" + rowData.id);

                                            }
                                        },
                                        {
                                            icon: () => <DeleteIcon />,
                                            tooltip: 'Delete GalleryType',
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
                            )}
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>

            <Dialog
                open={isArchiveDialogOpen}
                onClose={handleCloseArchiveDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete GalleryType"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to Delete this GalleryType<b> {currentSelectedItem.title}?</b>
                    </DialogContentText>
                </DialogContent>
                {isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>) : (
                    <DialogActions>
                        <Button onClick={() => handleDeleteGalleryType(currentSelectedItem)} color="rose" autoFocus>
                            Delete
                        </Button>
                        <Button onClick={handleCloseArchiveDialog} color="rose" >
                            Cancel
                        </Button>
                    </DialogActions>)}
            </Dialog>
        </div>
    );
}

export default withRouter(GalleryTypeTabPanel);