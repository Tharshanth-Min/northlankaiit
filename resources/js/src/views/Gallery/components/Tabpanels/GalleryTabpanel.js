import React, {useState, useRef} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
import Button from "../../../../components/CustomButtons/Button";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import Notification from '../../../../components/Notification/Notification';
import GalleryService from "../../../../services/gallery.service";
import { useLocation } from 'react-router-dom'
import MaterialTable, { MTableToolbar, Chip } from "material-table";
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { TABLE_ICONS } from "../../../../_constants/meterial-ui";
import { withRouter } from 'react-router-dom';
import {DeleteDialogBox, ImageDialogBox} from "../../../../_constants/utilities.constants";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';

const styles = {
    button : {
        float: 'right',
        padding: '12px',
        marginTop: '20px',
        marginRight: '20px',
        borderRadius: '3px',
    }
};

const useStyles = makeStyles(styles);

function GalleryTabPanel(props) {
    let location = useLocation();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [isArchiveDialogOpen, setIsArchiveDialogOpen] = useState(false);
    const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState({ title: '', id: 0, image: '' });
    const tableRef = useRef();

    const handleClickOpen = () => {
        props.history.push(location.pathname + "/add");
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
                const gallery = await GalleryService.delete(currentSelectedItem.id);
                Notification.DataUpdatedSuccess("Gallery deleted");
                setIsArchiveDialogOpen(false);
                setIsLoading(false);
                tableRef.current.onQueryChange();
            }
        } catch (err) {
            Notification.DataUpdatedFailed("Gallery");
        }
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            <MaterialTable
                                tableRef={tableRef}
                                title={<div style={{ padding: '10px 10px' }}>
                                    <Button className={classes.button} color="rose" onClick={handleClickOpen}>Add Gallery</Button>
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
                                        title: 'IMAGE',
                                        render: rowData =>
                                            <>
                                                {rowData.image_name ? (
                                                    <>
                                                        <IconButton color="primary"
                                                                    aria-label="upload picture"
                                                                    onClick={() => {
                                                                        setIsImageDialogOpen(true);
                                                                        setCurrentSelectedItem(rowData);
                                                                    }}
                                                        >
                                                            <ImageIcon/>
                                                        </IconButton>
                                                        {rowData.image_name.length > 10 ? rowData.image_name.split("", 15) : rowData.image_name}
                                                    </>
                                                ):("No Image found")}
                                            </>
                                    },
                                    {
                                        title: 'Title',
                                        field: 'title'
                                    },
                                  
                                ]}
                                data={query =>
                                    new Promise((resolve, reject) => {
                                        GalleryService.getAll(query.pageSize, query.page, query.search)
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
                                        icon: () => <Edit color="primary" />,
                                        tooltip: 'Edit Gallery',
                                        onClick: (event, rowData) => {
                                            props.history.push(location.pathname + "/edit/" + rowData.id);

                                        }
                                    },
                                    {
                                        icon: () => <DeleteIcon color="secondary"  />,
                                        tooltip: 'Delete Gallery',
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
                folderName='gallery'
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

export default withRouter(GalleryTabPanel);