import React, { useRef, useState} from "react";
import {DeleteDialogBox, ImageDialogBox} from "../../../_constants/utilities.constants";
import Button from "../../../components/CustomButtons/Button";
import {TABLE_ICONS} from "../../../_constants/meterial-ui";
import {Edit} from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import MaterialTable, { MTableToolbar, Chip } from "material-table";
import AlbumService from "../../../services/album.service";
import Notification from "../../../components/Notification/Notification";
import AddAlbum from "./AddAlbum";
import EditAlbum from "./EditAlbum";
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';


function Album (props) {
    const [currentSelectedItem, setCurrentSelectedItem] = useState({
        title: "",
        id: 0 ,
        gallery_type_name : "",
        image: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isArchiveDialogOpen, setIsArchiveDialogOpen] = useState(false);
    const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
    const [editAlbumDialogOpen, setEditAlbumDialogOpen] = useState(false);
    const [addAlbumDialogOpen, setAddAlbumDialogOpen] = useState(false);
    const [text, setText] = useState('Upload Image');
    const [visible, setVisible] = useState('none');
    const [galleryId, setGalleryId] = useState(props.match.params.id);
    const [image, setImage] = useState({ imageName : null, imageSize : null, type : null});


    const tableRef = useRef();

    const handleCloseArchiveDialog = () => {
        setIsArchiveDialogOpen(false);
    };

    const handleCloseImageDialog = () => {
        setIsImageDialogOpen(false);
    };

    const handleUploadClickAdd = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setSelectedFile(reader.result);
            setText('Change Image');
            setVisible('block');
            setImage({
                ...image,
                imageName : file.name,
                imageSize: file.size,
                type : file.type
            });
        };
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadClickEdit = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setSelectedFile(reader.result);
            setImage({
                ...image,
                imageName : file.name,
                imageSize: file.size,
                type: file.type
            });
        };
        setSelectedFile(event.target.files[0]);
    };

    const handleCloseAddAlbum  = () => {
        setAddAlbumDialogOpen(false);
        setSelectedFile(null);
    };

    const handleCloseEditAlbum  = () => {
        setEditAlbumDialogOpen(false);
        setSelectedFile(null);
    };

    const handleClickSaveAlbum = async () => {
        setIsLoading(true);
        try {
            let albumData = {
                gallery_id : galleryId,
                image : selectedFile,
                imageName : image.imageName,
                imageSize : image.imageSize,
                type: image.type
            };
            await AlbumService.create(albumData);
            Notification.DataUpdatedSuccess("Album added");
            setIsLoading(false);
            setAddAlbumDialogOpen(false);
            tableRef.current.onQueryChange();
            setSelectedFile(null);
            setText('Upload Image');
            setVisible('none');

        } catch (err) {
            setIsLoading(false);
            Notification.DataUpdatedFailed("Album");
        }
    };

    const handleClickEditAlbum = async () => {
        try {
            if (selectedFile) {
                setIsLoading(true);
                let albumData = {
                    id : currentSelectedItem.id,
                    image : selectedFile ? selectedFile : currentSelectedItem.image,
                    imageName : image.imageName,
                    imageSize : image.imageSize,
                    type: image.type
                };
                await AlbumService.update(albumData);
                Notification.DataUpdatedSuccess("Album updated");
                setIsLoading(false);
                tableRef.current.onQueryChange();
                setSelectedFile(null);
                setEditAlbumDialogOpen(false);
            }
            setEditAlbumDialogOpen(false);
        } catch (err) {
            setIsLoading(false);
            Notification.DataUpdatedFailed("Album");
        }
    };

    const handleDelete = async (currentSelectedItem) => {
        setIsLoading(true);
        try {
            if (currentSelectedItem.id) {
                const album = await AlbumService.delete(currentSelectedItem.id);
                Notification.DataUpdatedSuccess("Album deleted");
                setIsArchiveDialogOpen(false);
                setIsLoading(false);
                tableRef.current.onQueryChange();
            }
        } catch (err) {
            Notification.DataUpdatedFailed("Album");
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
                                    <Button style={{ marginRight: '10px'}}  color="rose" onClick={ () => setAddAlbumDialogOpen(true)}>Add Album</Button>
                                    <Button color="secondary" onClick={ () => props.history.push("/gallery")}>Back</Button>
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
                                        title: 'Album Name',
                                        field: 'gallery_type_name'
                                    },
                                ]}
                                data={query =>
                                    new Promise((resolve, reject) => {
                                        AlbumService.getAll(query.pageSize, query.page, query.search, galleryId)
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
                                        tooltip: 'Edit album',
                                        onClick: (event, rowData) => {
                                            setEditAlbumDialogOpen(true)
                                            setCurrentSelectedItem(rowData);
                                        }
                                    },
                                    {
                                        icon: () => <DeleteIcon color="secondary"  />,
                                        tooltip: 'Delete Album',
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

            <AddAlbum
                handleCloseAddAlbum={handleCloseAddAlbum}
                open={addAlbumDialogOpen}
                isLoading={isLoading}
                selectedFile={selectedFile}
                handleUploadClickAdd={handleUploadClickAdd}
                handleClickSaveAlbum={handleClickSaveAlbum}
                text={text}
                visible={visible}
            />

            <EditAlbum
                handleCloseEditAlbum={handleCloseEditAlbum}
                open={editAlbumDialogOpen}
                currentSelectedItem={currentSelectedItem}
                isLoading={isLoading}
                selectedFile={selectedFile}
                handleUploadClickEdit={handleUploadClickEdit}
                handleClickEditAlbum={handleClickEditAlbum}
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

export default Album;












