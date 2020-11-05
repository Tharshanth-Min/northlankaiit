import React, { useState, useRef, useEffect, Component } from "react";
import PropTypes from "prop-types";
import {Typography, TextField , Grid, Button} from "@material-ui/core";
import {USE_STYLES_FOR_MAIN_CONTENT} from "../../../_constants/meterial-ui";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import "./style.css";
import Divider from '@material-ui/core/Divider';
import GridContainer from "../../../_constants/components/Grid/GridContainer";
import GridItem from "../../../_constants/components/Grid/GridItem";
import Card from "../../../_constants/components/Card/Card";
import CardBody from "../../../_constants/components/Card/CardBody";
import CardHeader from "../../../_constants/components/Card/CardHeader";
import {Loader} from "../../../_constants/utilities.constants";


class PrintStudent extends Component {

    render() {
        const { studentForm } = this.props;
        const { stateOl } = this.props;
        const { stateAl } = this.props;
        const { classes2 } = this.props;
        const { classes } = this.props;
        const { isLoading2 } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs>
                        <div className="logo"></div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs>
                        <Typography color="textSecondary" variant="body2">
                            Top Floor, Peoples Bank Building, Stanley Road, Jaffna, Sri Lanka
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                            Tel: +94 21 492 7088
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                            E-mail: northlankaiit@yahoo.com
                        </Typography>

                        <Typography color="textSecondary" variant="body2">
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: '-20px',  marginBottom :'20px'}}/>

                {isLoading2 ? (<Loader/>): (
                    <div>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Full Name :</lable>
                                    <TextField
                                        id="fullName2"
                                        name="fullName"
                                        margin="normal"
                                        required
                                        value={studentForm.title + " " +studentForm.first_name + " " + studentForm.last_name}
                                        fullWidth
                                        placeholder="Full Name"
                                    />
                                </div>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>CourseName :</lable>
                                    <TextField
                                        id="courseName2"
                                        name="courseName"
                                        margin="normal"
                                        required
                                        value={studentForm.courseName}
                                        fullWidth
                                        placeholder="courseName"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={4} sm={4} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Date of Birth :</lable>
                                    <TextField
                                        id="date_of_birth2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Date of Birth"
                                        value={studentForm.date_of_birth}
                                        name="date_of_birth"
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={4} sm={4} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Gender : </lable>
                                    <TextField
                                        id="gender2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Gender"
                                        value={studentForm.gender}
                                        name="gender"
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={4} sm={4} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Nationality :</lable>
                                    <TextField
                                        id="nationality2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Nationality"
                                        value={studentForm.nationality}
                                        name="nationality"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={3} sm={3} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Personal Mobile No : </lable>
                                    <TextField
                                        id="personalNo2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Personal Mobile"
                                        value={studentForm.tell_phone_personal}
                                        name="personalNo"
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={3} sm={3} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Home Mobile No :</lable>
                                    <TextField
                                        id="homeNo2"
                                        margin="normal"
                                        fullWidth
                                        placeholder="Home Mobile (optional)"
                                        value={studentForm.tell_phone_home ? studentForm.tell_phone_home : "Not Given"}
                                        name="homeNo"
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={3} sm={3} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Office Mobile No :</lable>
                                    <TextField
                                        id="officeNo2"
                                        margin="normal"
                                        fullWidth
                                        placeholder="Office Mobile (optional)"
                                        name="officeNo"
                                        value={studentForm.tell_phone_office ? studentForm.tell_phone_office : "Not given"}
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={3} sm={3} md={3}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Nic / Passport No :</lable>
                                    <TextField
                                        id="nic_passport_no2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        value={studentForm.nic_or_passport_no}
                                        placeholder="Nic / Passport No"
                                        name="nic_passport_no"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Name on Certification :</lable>
                                    <TextField
                                        id="certificationName2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Name on Certification"
                                        value={studentForm.certification_name}
                                        name="certificationName"
                                    />
                                </div>
                            </GridItem>

                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Email Address :</lable>
                                    <TextField
                                        id="emailAddress2"
                                        margin="normal"
                                        required
                                        fullWidth
                                        placeholder="Email Address"
                                        value={studentForm.email}
                                        name="emailAddress"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>

                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CastForEducationIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Education Qualification"/>
                            </ListItem>
                        </List>
                        <Divider />
                        <GridContainer>
                            { stateOl.checkedOl ? (
                                <>
                                    <GridItem xs={5} sm={5} md={5}>
                                        <List component="nav" className={classes2.root} aria-label="mailbox folders">
                                            <ListItem button divider>
                                                <Typography gutterBottom variant="h6">
                                                    O/L RESULT
                                                </Typography>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Year" />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.olYear}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Index No "  />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.olIndex}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button >
                                                <ListItemText primary="Math" />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.olMath}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Science" />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.olScience}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="English" />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.olEnglish}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Remark" />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.remark}Religion - A, Math - K</label>
                                            </ListItem>
                                            <Divider />
                                        </List>
                                    </GridItem>
                                </>
                            ):(
                                <GridItem xs={12} sm={12} md={5}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <List component="nav" className={classes2.root} aria-label="mailbox folders">
                                            <ListItem button divider>
                                                <label style={{ paddingRight: '30px'}}>No O/L RESULT FOUND</label>
                                            </ListItem>
                                            <Divider />
                                        </List>
                                    </Grid>
                                </GridItem>
                            )}
                            { stateAl.checkedAl ? (
                                <>
                                    <GridItem xs={7} sm={7} md={7}>
                                        <List component="nav" className={classes2.root} aria-label="mailbox folders">
                                            <ListItem button divider>
                                                <Typography gutterBottom variant="h6">
                                                    A/L RESULT
                                                </Typography>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Stream Type"/>
                                                <label style={{ paddingRight: '30px'}}>{studentForm.streamType && studentForm.streamType.name}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button >
                                                <ListItemText primary="Year " />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.alYear}</label>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText primary="Index No " />
                                                <label style={{ paddingRight: '30px'}}>{studentForm.alIndex}</label>
                                            </ListItem>
                                            <Divider />
                                            { studentForm.streamType.id === 1 && (
                                                <>
                                                    {studentForm.sciechemistry !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Chemistry" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.sciechemistry}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.sciebiology !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Biology" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.sciebiology}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.sciephysics !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Physics" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.sciephysics}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.agriculturalScience !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Agricultural Science" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.agriculturalScience}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.scieenglish !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="English" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.scieenglish}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                </>
                                            )}

                                            { studentForm.streamType.id === 2 && (
                                                <>
                                                    {studentForm.mathchemistry !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Chemistry" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.mathchemistry}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.combined_mathematics !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Combined Mathematics" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.combined_mathematics}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.mathphysics !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Physics" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.mathphysics}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.mathict !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="ICT" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.mathict}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.mathenglish !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="English" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.mathenglish}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                </>
                                            )}

                                            { studentForm.streamType.id === 3 && (
                                                <>
                                                    {studentForm.business_studies !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Business Studies" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.business_studies}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.economics !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Economics" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.economics}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.accounting !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Accounting" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.accounting}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.comict !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="ICT" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.comict}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.comenglish !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Agricultural Science" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.comenglish}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                </>
                                            )}

                                            { studentForm.streamType.id === 4 && (
                                                <>
                                                    {studentForm.tamil !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Tamil" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.tamil}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.hinduCulture !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Hindu Culture" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.hinduCulture}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.politic !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Politic" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.politic}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.artEconomics !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Economics" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.artEconomics}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}

                                                    {studentForm.geographic !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Geographic" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.geographic}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                    {studentForm.artEnglish !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="English" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.artEnglish}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                    {studentForm.artRemark !== "Nope" && (
                                                        <>
                                                            <ListItem button>
                                                                <ListItemText primary="Remark" />
                                                                <label style={{ paddingRight: '30px'}}>{studentForm.artRemark}</label>
                                                            </ListItem>
                                                            <Divider />
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </List>
                                    </GridItem>
                                </>
                            ):(
                                <GridItem xs={12} sm={12} md={5}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <List component="nav" className={classes2.root} aria-label="mailbox folders">
                                            <ListItem button divider>
                                                <label style={{ paddingRight: '30px'}}>No A/L RESULT FOUND</label>
                                            </ListItem>
                                            <Divider />
                                        </List>
                                    </Grid>
                                </GridItem>
                            )}
                        </GridContainer>

                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CastForEducationIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Other Qualification"/>
                            </ListItem>
                        </List>
                        <Divider />
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Work Experience :</lable>
                                    <TextField
                                        id="workExperience2"
                                        margin="normal"
                                        multiline
                                        fullWidth
                                        placeholder="Work Experience (optional)"
                                        name="workExperience"
                                        value={studentForm.work_exp}
                                    />
                                </div>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <div style={{ marginTop: "10px" }}>
                                    <lable>Other Qualification :</lable>
                                    <TextField
                                        id="otherQua2"
                                        margin="normal"
                                        multiline
                                        fullWidth
                                        placeholder="Other Qualification (optional)"
                                        name="otherQua"
                                        value={studentForm.other_quali}
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                )}
            </div>
        );
    }
}

export default PrintStudent;
