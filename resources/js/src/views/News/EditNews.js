import React from 'react';
import PropTypes from 'prop-types';
import "./News.css";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import { stateToHTML } from "draft-js-export-html";
import 'draft-js/dist/Draft.css';
import {EditorState} from 'draft-js';
import Notification from '../../components/Notification/Notification';
import NewsService from "../../services/news.service";
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';
import {stateFromHTML} from 'draft-js-import-html';
import { STORAGE_URL } from "../../_constants/utilities.constants";


class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            isLoading : false,
            isLoading2 : false,
            displayChange : "none",
            displaySelect : "block",
            selectedFile : null,
            selectedDate : new Date(),
            imageName : null,
            imageSize : null,
            title : "",
            postedBy : "",
            views : "",
            id : this.props.match.params.id
        };

    }

    onChange = editorState => {
        this.setState({
            editorState,
            editorContentHtml: stateToHTML(editorState.getCurrentContent())
        });
    };

    handleClose = () => {
        this.props.history.push("/news");
    };

    handleUploadClick = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);
        reader.onloadend = function(e) {
            this.setState({
                selectedFile : reader.result,
                displayChange : "block",
                displaySelect : "none",
                imageName : file.name,
                imageSize : file.size
            })

        }.bind(this);
        this.setState({
            selectedFile : event.target.files[0]
        })
    };

    handleClickRemovePicture = () => {
        this.setState({
            selectedFile : null,
            displayChange : "none",
            displaySelect : "block"
        });
    };

    handleDateChange = (date) => {
        this.setState({
            selectedDate : date,
        });
    };

    componentDidMount() {
        this.getNews();
    }

    getNews = async () => {
        if (this.state.id) {
            try {
                this.setState({ isLoading2: true });

                const response = await NewsService.getById(this.state.id);
                let contentState = stateFromHTML(response.news.description);
                this.setState({
                    title: response.news.title,
                    postedBy : response.news.posted_by,
                    selectedDate : response.news.posted_on,
                    views : response.news.number_of_views,
                    selectedFile : STORAGE_URL + "/news/" + response.news.image,
                    editorState: EditorState.createWithContent(contentState),
                    isLoading2: false
                });

            } catch (err) {
                this.setState({ isLoading2: false });
                console.error(err);
                Notification.DataUpdatedFailed("fetch news");
            }
        }
    }

    handleClickUpdate = async (event) => {
        event.preventDefault();
        this.setState({
            isLoading : true,
        });

        try {
            const newsFormData = {
                id : this.state.id,
                image : this.state.selectedFile,
                title : this.state.title,
                postedBy : this.state.postedBy,
                postedOn : this.state.selectedDate,
                description : this.state.editorContentHtml,
                views : this.state.views,
                imageName : this.state.imageName,
                imageSize : this.state.imageSize
            };
            const news = await NewsService.update(newsFormData);
            Notification.DataUpdatedSuccess("News updated");
            this.setState({
                isLoading : false,
            });

            this.props.history.push("/news");

        } catch (error) {
            this.setState({
                isLoading : false,
            });
            Notification.DataUpdatedFailed("update news");
        }
    };

    render() {
        const {editorState} = this.state;

        return (
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <form autoComplete="off" onSubmit={this.handleClickUpdate}>
                      <CardHeader color="rose">
                        <h4 className="cardTitleWhite">Edit News</h4>
                      </CardHeader>

                        {this.state.isLoading2 ? (
                            <Grid
                                style={{ marginTop : "50px", marginBottom : "50px", }}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            > <CircularProgress color="primary"/></Grid>
                        ) : (
                            <CardBody>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                  <div style={{ marginTop : "10px"}}>
                                    <lable >Title</lable>
                                    <TextField
                                        margin="normal"
                                        placeholder="Title"
                                        required
                                        fullWidth
                                        id="title"
                                        name="title"
                                        autoFocus
                                        value={this.state.title}
                                        onChange={e => {
                                            this.setState({
                                                title : e.target.value
                                            })
                                        }}
                                    />
                                  </div>
                                </GridItem>
                            
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={6} >
                                  <div style={{ marginTop : "10px"}}>
                                    <lable >Posted on</lable>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                      <KeyboardDatePicker
                                          id="postedOn"
                                          name="postedOn"
                                          margin="normal"
                                          fullWidth
                                          required
                                          placeholder="Posted on"
                                          format="MM/dd/yyyy"
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                          value={this.state.selectedDate}
                                          onChange={this.handleDateChange}
                                      />
                                    </MuiPickersUtilsProvider>
                                  </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6} >
                                  <div style={{ marginTop : "10px"}}>
                                    <lable >Posted by</lable>
                                    <TextField
                                        margin="normal"
                                        placeholder="Posted by"
                                        required
                                        fullWidth
                                        id="postedBy"
                                        name="postedBy"
                                        value={this.state.postedBy}
                                        onChange={e => {
                                            this.setState({
                                                postedBy : e.target.value
                                            })
                                        }}
                                    />
                                  </div>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                  <div style={{ marginTop : "10px"}}>
                                    <lable >Description</lable>
                                    <div className="DraftJsPlaygroundContainer-editor">
                                      <RichTextEditor
                                          className="DraftEditor-root"
                                          editorState={editorState}
                                          onChange={this.onChange}
                                          placeholder="Tell a story..."
                                      />
                                    </div>
                                  </div>
                                </GridItem>
                              </GridContainer>

                                <CardFooter>
                                    {this.state.isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>
                                    ) : (<div>
                                        <Button type="submit" style={{ marginRight: '10px'}} color="rose">Update</Button>
                                        <Button onClick={this.handleClose}  color="secondary">
                                            Cancel
                                        </Button>
                                    </div>)}
                                </CardFooter>
                            </CardBody>
                        )}
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
        );
    }
}


export default withRouter(EditNews);


