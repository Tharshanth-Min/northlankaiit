import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {Typography, TextField , Grid, Button} from "@material-ui/core";
import {USE_STYLES_FOR_MAIN_CONTENT} from "../../_constants/meterial-ui";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import "./Student.css";
import StudentService from "../../services/student.service";
import Divider from '@material-ui/core/Divider';
import GridContainer from "../../_constants/components/Grid/GridContainer";
import GridItem from "../../_constants/components/Grid/GridItem";
import Card from "../../_constants/components/Card/Card";
import CardBody from "../../_constants/components/Card/CardBody";
import CardHeader from "../../_constants/components/Card/CardHeader";
import {Loader, Grade} from "../../_constants/utilities.constants";
import { makeStyles } from '@material-ui/core/styles';
import { Save, Print, CancelPresentationOutlined } from "@material-ui/icons";
import ReactToPrint from 'react-to-print';
import PrintStudent from "./print/PrintStudent";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },
}));

function ViewStudent(props) {
    const componentRef = useRef();
    const classes = USE_STYLES_FOR_MAIN_CONTENT();
    const classes2 = useStyles();
    const [isLoading2, setIsLoading2] = useState(true);
    const [olDisplay, setOlDisplay] = useState("block");
    const [alDisplay, setAlDisplay] = useState("block");
    const [studentForm, setStudentForm] = useState({});

    const id = props.match.params.id;

    const addStudentData = (student) => {
        setStudentForm({
            ...studentForm,
            first_name: student.first_name,
            last_name: student.last_name,
            certification_name: student.certification_name,
            title: student.title,
            date_of_birth: student.date_of_birth,
            gender: student.gender,
            nic_or_passport_no: student.nic_or_passport_no,
            nationality: student.nationality,
            tell_phone_home: student.tell_phone_home,
            tell_phone_office: student.tell_phone_office,
            tell_phone_personal: student.tell_phone_personal,
            address: student.address,
            email: student.email,
            work_exp: student.work_exp,
            other_quali: student.other_quali,
            courseName: student.course.name,

            olId : checkEmptyValue(student.ol_results) ? student.ol_results.id : "",
            olYear : checkEmptyValue(student.ol_results) ? student.ol_results.year_of_examination : new Date(),
            olIndex :checkEmptyValue(student.ol_results) ? student.ol_results.index_no : "",
            olMath :checkEmptyValue(student.ol_results) ? student.ol_results.math : "",
            olScience : checkEmptyValue(student.ol_results) ? student.ol_results.science : "",
            olEnglish : checkEmptyValue(student.ol_results) ? student.ol_results.english : "",

            streamType: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.stream_type) ?
                    student.al_results.stream_type : "" : "",

            alId : checkEmptyValue(student.al_results) ? student.al_results.id : "",
            alYear : checkEmptyValue(student.al_results) ? student.al_results.year_of_examination : new Date(),
            alIndex : checkEmptyValue(student.al_results) ? student.al_results.index_no : "",


            // SCIENCE STREAM
            scieId : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.id : "" : "",

            sciechemistry : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.chemistry : "" : "",

            sciephysics : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.physics: "" : "",

            sciebiology : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.biology: "" : "",

            agriculturalScience :checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.agricultural_science: "" : "",

            scieenglish : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.science_stream) ?
                    student.al_results.science_stream.english: "" : "",

            // MATH STREAM
            mathId : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.id : "" : "",

            mathchemistry : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.chemistry: "" : "",

            mathphysics : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.physics: "" : "",

            combined_mathematics : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.combined_mathematics: "" : "",

            mathenglish : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.english : "" : "",

            mathict : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.math_stream) ?
                    student.al_results.math_stream.information_technology : "" : "",

            // COMMERCE STREAM
            comId : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.id : "" : "",

            business_studies: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.business_studies : "" : "",

            economics: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.economics : "" : "",

            accounting: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.accounting : "" : "",

            comict : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.information_technology : "" : "",

            comenglish : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.commerce_stream) ?
                    student.al_results.commerce_stream.english : "" : "",

            // ARTS STREAM
            artId : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.id : "" : "",


            tamil : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.tamil : "" : "",

            hinduCulture: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.hindu_culture : "" : "",

            artEconomics: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.economics : "" : "",

            politic: checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.politic : "" : "",

            geographic : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.geographic : "" : "",

            artEnglish : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.english : "" : "",

            artRemark : checkEmptyValue(student.al_results) ?
                checkEmptyValue(student.al_results.art_stream) ?
                    student.al_results.art_stream.remark : "" : "",
        });

    };

    const [stateOl, setOlState] = React.useState({
        checkedOl: true,
    });

    const [stateAl, setAlState] = React.useState({
        checkedAl: true,
    });


    const addDisplayVisibleOl = (value) => {
        if (value === null) {
            setOlState({
                ...stateOl,
                checkedOl: false
            });
            setOlDisplay("none");
        }
    };

    const addDisplayVisibleAl = (value) => {
        if (value === null) {
            setAlState({
                ...stateAl,
                checkedAl: false
            });
            setAlDisplay("none");
        }
    };

    useEffect(() => {

        const fetchStudent = async () => {
            try {
                const response = await StudentService.getById(id);
                addDisplayVisibleAl(response.student.al_results);
                addDisplayVisibleOl(response.student.ol_results);
                addStudentData(response.student);
                setIsLoading2(false);
            } catch (err) {
                return  setIsLoading2(true);
            }
        };

        fetchStudent();

    }, []);

    const handleClickCancel = (event) => {
        event.preventDefault();
        props.history.push("/student");
    };

    const checkObjectEmpty = (value) => {
        if (value)
            return value;
        return { id : 0, name : ""};
    };

    const checkEmptyValue = (value) => {

        if (value !== null )
            return true;
        else {
            return false
        }
    };


    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <span className="cardTitleWhite">Registration Form</span>

                    <ReactToPrint
                        trigger={() => <Button
                            variant="contained"
                            style={{ float: 'right', backgroundColor: '#d500f9', color: 'white'}}
                            size="small"
                            startIcon={<Print />}
                        >Print</Button>}
                        content= {() => componentRef.current}
                    />
                </CardHeader>
                {isLoading2 ? (<Loader/>): (
                    <div>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Full Name :</lable>
                                        <TextField
                                            id="fullName"
                                            name="fullName"
                                            margin="normal"
                                            required
                                            value={studentForm.title + " " +studentForm.first_name + " " + studentForm.last_name}
                                            fullWidth
                                            placeholder="Full Name"
                                        />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>CourseName :</lable>
                                        <TextField
                                            id="courseName"
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
                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Date of Birth :</lable>
                                        <TextField
                                            id="date_of_birth"
                                            margin="normal"
                                            required
                                            fullWidth
                                            placeholder="Date of Birth"
                                            value={studentForm.date_of_birth}
                                            name="date_of_birth"
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Gender : </lable>
                                        <TextField
                                            id="gender"
                                            margin="normal"
                                            required
                                            fullWidth
                                            placeholder="Gender"
                                            value={studentForm.gender}
                                            name="gender"
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Nationality :</lable>
                                        <TextField
                                            id="nationality"
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
                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Personal Mobile No : </lable>
                                        <TextField
                                            id="personalNo"
                                            margin="normal"
                                            required
                                            fullWidth
                                            placeholder="Personal Mobile"
                                            value={studentForm.tell_phone_personal}
                                            name="personalNo"
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Home Mobile No :</lable>
                                        <TextField
                                            id="homeNo"
                                            margin="normal"
                                            fullWidth
                                            placeholder="Home Mobile (optional)"
                                            value={studentForm.tell_phone_home ? studentForm.tell_phone_home : "Not Given"}
                                            name="homeNo"
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Office Mobile No :</lable>
                                        <TextField
                                            id="officeNo"
                                            margin="normal"
                                            fullWidth
                                            placeholder="Office Mobile (optional)"
                                            name="officeNo"
                                            value={studentForm.tell_phone_office ? studentForm.tell_phone_office : "Not given"}
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={3}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Nic / Passport No :</lable>
                                        <TextField
                                            id="nic_passport_no"
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
                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Name on Certification :</lable>
                                        <TextField
                                            id="certificationName"
                                            margin="normal"
                                            required
                                            fullWidth
                                            placeholder="Name on Certification"
                                            value={studentForm.certification_name}
                                            name="certificationName"
                                        />
                                    </div>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Email Address :</lable>
                                        <TextField
                                            id="email"
                                            margin="normal"
                                            multiline
                                            required
                                            fullWidth
                                            value={studentForm.email}
                                            placeholder="Email"
                                            name="email"
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
                                <GridItem xs={12} sm={12} md={5}>
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
                                        style={{ marginTop: "150px" }}
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
                                <GridItem xs={12} sm={12} md={6}>
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
                                            style={{ marginTop: "150px" }}
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
                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Work Experience :</lable>
                                        <TextField
                                            id="workExperience"
                                            margin="normal"
                                            multiline
                                            fullWidth
                                            placeholder="Work Experience (optional)"
                                            name="workExperience"
                                            value={studentForm.work_exp}
                                        />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Other Qualification :</lable>
                                        <TextField
                                            id="otherQua"
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
                        </CardBody>
                    </div>
                )}
            </Card>

            <div style={{ display : "none"}}>
                <PrintStudent
                    studentForm={studentForm}
                    ref={componentRef}
                    stateOl={stateOl}
                    stateAl={stateAl}
                    classes2={classes2}
                    classes={classes}
                    isLoading2={isLoading2}
                />
            </div>
        </div>
    );
}

ViewStudent.propTypes = {};

ViewStudent.defaultProps = {};

export default ViewStudent;
