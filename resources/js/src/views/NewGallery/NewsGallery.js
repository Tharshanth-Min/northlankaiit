import React, {useState, useRef, useEffect} from "react";
import Card from "../../components/Card/Card";
import GridItem from "../../components/Grid/GridItem";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import Divider from "@material-ui/core/Divider";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import GridContainer from "../../components/Grid/GridContainer";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "../../components/CustomButtons/Button";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import GalleryTypeService from "../../services/galleryType.service";
import Notification from "../../components/Notification/Notification";
import NewsGalleryService from "../../services/newsGallery.service";
import {pick12hOr24hFormat} from "@material-ui/pickers/_helpers/text-field-helper";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GridList from "@material-ui/core/GridList";
import bgImage from "../../assets/img/news.png";
import ListSubheader from "@material-ui/core/ListSubheader";
import GalleryService from "../../services/gallery.service";
import DeleteIcon from '@material-ui/icons/Delete';
import {Loader, STORAGE_URL} from "../../_constants/utilities.constants";

const useStyles = makeStyles((theme) => ({
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
        padding: '12px',
        marginTop: '20px',
        marginRight: '20px',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));



function NewsGallery(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(bgImage);
    const [displayChanged, setDisplayChanged] = useState("none");
    const [displaySelected, setDisplaySelected] = useState("block");
    const [newsImageData, setNewsImageData] = useState({
        id: id,
        image : null,
        imageName : null,
        imageSize : null,
        type : null
    });
    const [newGallery, setNewGallery] = useState([]);

    useEffect(() => {
        const fetchNewsImages =  async () => {
            setIsLoading(true);
            try {
                const response = await NewsGalleryService.getById(id);
                setNewGallery(response.newImages);
                setIsLoading(false);

            }catch(err){
                Notification.DataUpdatedFailed("GalleryType");
            }
        };

        fetchNewsImages();
    }, []);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setSelectedFile(reader.result);
            setDisplayChanged("block");
            setDisplaySelected("none")
            setNewsImageData({
                ...newsImageData,
                imageName : file.name,
                imageSize: file.size,
                type : file.type
            });
        };
        setSelectedFile(event.target.files[0]);
    };

    const handleClickRemovePicture = () => {
        setSelectedFile(null);
        setDisplayChanged("none");
        setDisplaySelected("block");
    };

    const addImage = (newImage) => {
        const image = [{...newImage }, ...newGallery];
        setNewGallery(image);
    };

    const handleClickSave = async (event) => {
        event.preventDefault();

            setIsLoading(true);
            try {
                let data = {
                    news_id: newsImageData.id,
                    image : selectedFile,
                    imageName : newsImageData.imageName,
                    imageSize : newsImageData.imageSize,
                    type : newsImageData.type
                };
                const response = await NewsGalleryService.create(data);
                addImage(response.image[0])
                Notification.DataUpdatedSuccess("Added");
                handleClickRemovePicture();
                setIsLoading(false);
                setSelectedFile(bgImage);
            } catch (err) {
                return setIsLoading(false);
            }

    };


    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <span
                        onClick={()=> props.history.push("/news")}
                        style={{ cursor : 'pointer', textDecoration : "underline"}}
                    >News</span>
                    <i> -> News Gallery</i>
                </CardHeader>
                <CardBody>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <div>
                            <Avatar src={selectedFile} style={{ width: '200px', height: '120px', borderRadius : '5%' }}  />
                            <div style={{ marginTop : "10px"}}>
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
                                        <Button variant="contained" size="sm" style={{ marginLeft : "13px"}} component="span">
                                            Change
                                        </Button>
                                        <Button variant="contained" style={{ marginLeft : "5px"}} color="danger" size="sm"  startIcon={<AddIcon />} onClick={handleClickSave}>
                                            Add
                                        </Button>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </Grid>
                    {isLoading ? (<Loader/>)
                        : newGallery.length > 0 ? (
                            <>
                                <Divider style={{ marginTop: '20px', marginBottom: '30px'}}/>
                                <div className={classes.root}>
                                    <GridList cellHeight={160} className={classes.gridList} cols={4}>
                                        {newGallery.map((image) => (
                                            <GridListTile key={image.image} cols={1}>
                                                <img src={STORAGE_URL+ '/news/news-' + id + '/' + image.image} alt={image.image} />
                                                <GridListTileBar
                                                    title={image.image_name.split("", 15)}
                                                    subtitle={<span style={{ textTransform : "uppercase"}}>By: {image.news.posted_by}</span>}
                                                    actionIcon={
                                                        <IconButton
                                                            aria-label={`info about ${image.image}`}
                                                            className={classes.icon}
                                                            onClick={(oldData) =>
                                                                new Promise((resolve) => {
                                                                    let data = {
                                                                        news_id: newsImageData.id,
                                                                       id : image.id
                                                                    };
                                                                    NewsGalleryService.delete(data)
                                                                        .then(response => response).then((result) => {
                                                                        const newList = newGallery.filter((item) => item.id !== image.id);
                                                                        setNewGallery(newList);
                                                                    })
                                                                })
                                                            }
                                                        >
                                                            <DeleteIcon  />
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            </>
                        ) : (
                            <div style={{ marginTop: '20px'}}>
                                <Divider/>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{ marginTop: "20px"}}
                                >No Image found</Grid>
                            </div>
                        )}
                </CardBody>
            </Card>
        </div>
    );
}

export default NewsGallery;