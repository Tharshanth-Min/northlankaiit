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
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import 'draft-js/dist/Draft.css';
import {EditorState} from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import Notification from '../../components/Notification/Notification';
import NewsService from "../../services/news.service";
import { withRouter } from 'react-router';

class AddNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      isLoading : false,
      selectedDate : new Date(),
      news : [],
      title : "",
      postedBy : "",
      views : ""
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

  handleDateChange = (date) => {
    this.setState({
      selectedDate : date,
    });
  };

  handleClickSave = async (event) => {
    event.preventDefault();
    this.setState({
      isLoading : true,
    });

    try {
      const newsFormData = {
        title : this.state.title,
        postedBy : this.state.postedBy,
        postedOn : this.state.selectedDate,
        description : this.state.editorContentHtml,
        views : this.state.views,
      };

      await NewsService.create(newsFormData);
      Notification.DataUpdatedSuccess("News added");
      this.setState({
        isLoading : false,
      });

      this.props.history.push("/news");

    } catch (error) {
      this.setState({
        isLoading : false,
      });
        Notification.DataUpdatedFailed("news");
    }
  };

  render() {
    const {editorState} = this.state;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form autoComplete="off" onSubmit={this.handleClickSave}>
                <CardHeader color="rose">
                  <h4 className="cardTitleWhite">Add News</h4>
                </CardHeader>

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
                        multiline
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



                </CardBody>
                <CardFooter>
                  {this.state.isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>
                  ) : (<div>
                    <Button type="submit" style={{ marginRight: '10px'}} color="rose">Save</Button>
                    <Button onClick={this.handleClose}  color="secondary">
                      Cancel
                    </Button>
                  </div>)}
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}


export default withRouter(AddNews);


