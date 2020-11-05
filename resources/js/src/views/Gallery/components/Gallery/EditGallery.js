import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import "./Gallery.css";
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
import Button from "../../../../components/CustomButtons/Button";
import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/CardHeader";
import CardBody from "../../../../components/Card/CardBody";
import CardFooter from "../../../../components/Card/CardFooter";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import Notification from '../../../../components/Notification/Notification';
import GalleryService from "../../../../services/gallery.service";
import { withRouter } from 'react-router';
import {STORAGE_URL} from "../../../../_constants/utilities.constants";


function  EditGallery (props) {
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayChanged, setDisplayChanged] = useState("none");
    const [displaySelected, setDisplaySelected] = useState("block");
    const [id, setId] = useState(props.match.params.id);
    const [galleryFormData, setGalleryFormData] = useState({
        id: 0,
        title : "",
        description: "",
        galleryType: {},
        image : null,
        imageName : null,
        imageSize : null,
        type: null
    });

    useEffect(() => {
        setImageLoading(true);

        const fetchGallery = async () => {

            if (id) {
                try {
                    const response = await GalleryService.getById(id);
                    setGalleryFormData({
                        ...galleryFormData,
                        title : response.gallery.title,
                        description : response.gallery.description,
                    });
                    setSelectedFile(STORAGE_URL + "/gallery/" + response.gallery.image);
                    setImageLoading(false);
                } catch (err) {
                    setImageLoading(false);
                    console.error(err);
                    Notification.DataUpdatedFailed("fetch gallery");
                }
            }
        };

        fetchGallery();

    }, []);

    const handleClickCancel = (event) => {
        event.preventDefault();
        props.history.push('/gallery');
    };

    const handleUploadClick = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setSelectedFile(reader.result);
            setDisplayChanged("block");
            setDisplaySelected("none")
            setGalleryFormData({
                ...galleryFormData,
                imageName : file.name,
                imageSize: file.size,
                type: file.type
            });
        };
        setSelectedFile(event.target.files[0]);
    };

    const handleClickRemovePicture = () => {
        setSelectedFile(null);
        setDisplayChanged("none");
        setDisplaySelected("block");
    };

    const handleClickUpdate = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            let galleryData = {
            	id : id,
                title: galleryFormData.title,
                description: galleryFormData.description,
                galleryType: galleryFormData.galleryType,
                image : selectedFile,
                imageName : galleryFormData.imageName,
                imageSize : galleryFormData.imageSize,
                type: galleryFormData.type

            };
            await GalleryService.update(galleryData);
            Notification.DataUpdatedSuccess("Gallery updated");
            setIsLoading(false);
            props.history.push("/gallery");

        } catch (err) {
            setIsLoading(false);
            Notification.DataUpdatedFailed("Gallery");
        }
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <form autoComplete="off" onSubmit={handleClickUpdate}>
                            <CardHeader color="rose">
                                <h4 className="cardTitleWhite">Edit Gallery</h4>
                            </CardHeader>
                            {imageLoading ? (
                                <Grid
                                    container
                                    direction="row"
                                    style={{ marginTop : "30px", marginBottom: "20px"}}
                                    justify="center"
                                    alignItems="center"
                                > <CircularProgress color="primary"/></Grid>
                            ):(
                                <div>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={6} >
                                                <div style={{ marginTop : "10px"}}>
                                                    <lable >Title</lable>
                                                    <TextField
                                                        margin="normal"
                                                        placeholder="Title"
                                                        required
                                                        multiline
                                                        fullWidth
                                                        id="title"
                                                        name="title"
                                                        autoFocus
                                                        value={galleryFormData.title}
                                                        onChange={e => setGalleryFormData({
                                                            ...galleryFormData,
                                                            title : e.target.value
                                                        })}
                                                    />
                                                </div>
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6} >
                                                <div style={{ marginTop : "10px"}}>
                                                    <lable >Description</lable>
                                                    <TextField
                                                        margin="normal"
                                                        placeholder="Description"
                                                        required
                                                        multiline
                                                        fullWidth
                                                        id="description"
                                                        name="description"
                                                        value={galleryFormData.description}
                                                        onChange={e => setGalleryFormData({
                                                            ...galleryFormData,
                                                            description : e.target.value
                                                        })}
                                                    />
                                                </div>
                                            </GridItem>

                                        
                                        </GridContainer>

                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={4} >
                                                <div className="ImgWrapper">
                                                    <Avatar src={selectedFile} style={{ width: '300px', height: '160px', borderRadius : '5%' }}  />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={12} sm={12} md={2}>
                                                <div style={{ marginTop : "75px", float: 'left'}}>
                                                    <input
                                                        accept="image/*"
                                                        className="input"
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                        style={{ display: "none"}}
                                                        onChange={handleUploadClick}
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <div style={{ display: displaySelected}}>
                                                            <Button variant="contained" color="rose"  fullWidth component="span">
                                                                select image
                                                            </Button>
                                                        </div>
                                                        <div style={{ display: displayChanged}}>
                                                            <Button variant="contained" className="uploadButton" fullWidth component="span">
                                                                Change
                                                            </Button>
                                                            <Button variant="contained" color="#ff5722" className="removeButton" onClick={handleClickRemovePicture} fullWidth startIcon={<CloseIcon />}>
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    </label>
                                                </div>
                                            </GridItem>
                                        </GridContainer>

                                    </CardBody>
                                    <CardFooter>
                                        {isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>
                                        ) : (<div>
                                            <Button type="submit" style={{ marginRight: "10px"}} color="rose">Update</Button>
                                            <Button color="secondary" onClick={handleClickCancel}>Cancel</Button>
                                        </div>)}
                                    </CardFooter>
                                </div>
                            )}
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}


export default withRouter(EditGallery);


