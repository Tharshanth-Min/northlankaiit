import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Box, Typography, TextField, Grid } from "@material-ui/core";
import {
    USE_STYLES_FOR_MAIN_CONTENT,
    TABLE_ICONS,
} from "../../_constants/meterial-ui";
import { Save, Print, CancelPresentationOutlined } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DateFnsUtils from "@date-io/date-fns";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import "./Student.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import StudentService from "../../services/student.service";
import HelperService from "../../services/helper.service";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Notification from '../../components/Notification/Notification';
import GridContainer from "../../_constants/components/Grid/GridContainer";
import GridItem from "../../_constants/components/Grid/GridItem";
import Card from "../../_constants/components/Card/Card";
import CardBody from "../../_constants/components/Card/CardBody";
import CardHeader from "../../_constants/components/Card/CardHeader";
import CardFooter from "../../_constants/components/Card/CardFooter";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Gender, Title, Nationality, getUnique, Loader, Grade} from "../../_constants/utilities.constants";


function EditStudent(props) {
    const classes = USE_STYLES_FOR_MAIN_CONTENT();
    const studentId = props.match.params.id;
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [courseName, setCourseName] = useState([]);
    const [olDisplay, setOlDisplay] = useState("block");
    const [alDisplay, setAlDisplay] = useState("block");

    const [streamType, setStreamType] =  useState([
        {id : 1 , name : 'Science stream'},
        {id : 2 , name : 'Mathematics stream'},
        {id : 3 , name : 'Commerce stream'},
        {id : 4 , name : 'Arts stream'},
        {id : 5 , name : 'Technology stream'},
    ]);

    const [studentForm, setStudentForm] = useState({
        id : studentId,
        first_name: "",
        last_name: "",
        certification_name: "",
        title: "",
        date_of_birth: "",
        gender: "",
        nic_or_passport_no: "",
        nationality: "",
        tell_phone_home: "",
        tell_phone_office: "",
        tell_phone_personal: "",
        address: "",
        email: "",
        work_exp: "",
        other_quali: "",
        courseName: {},

        olId : "",
        olYear :  new Date(),
        olIndex :"",
        olMath : "",
        olScience : "",
        olEnglish : "",
        olRemark :  "",

        streamType: {},
        alId : "",
        alYear :  new Date(),
        alIndex : "",

        // SCIENCE STREAM
        scieId : "",
        sciechemistry : "",
        sciephysics : "",
        sciebiology : "",
        agriculturalScience : "",
        scieenglish : "",

        // MATH STREAM
        mathId : "",
        mathchemistry : "",
        mathphysics : "",
        combined_mathematics : "",
        mathict : "",
        mathenglish : "",

        // COMMERCE STREAM
        comId : "",
        business_studies: "",
        economics: "",
        accounting: "",
        comict : "",
        comenglish : "",

        // ARTS STREAM
        artId : "",
        tamil: "",
        hinduCulture: "",
        artEconomics: "",
        politic : "",
        geographic : "",
        artEnglish : "",
        artRemark : "",

    });

    const id = props.match.params.id;

    const [stateOl, setOlState] = React.useState({
        checkedOl: true,
    });

    const [stateAl, setAlState] = React.useState({
        checkedAl: true,
    });

    const handleChangeOl = (event) => {
        setOlState({
            ...stateOl,
            [event.target.name]: event.target.checked,
        });
    };

    const handleChangeAl = (event) => {
        setAlState({
            ...stateAl,
            [event.target.name]: event.target.checked,
        });

        setStudentForm({
            ...studentForm,
            streamType: {id : 0, name : ""},
        });
    };

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
            courseName: student.course,

            olId : checkEmptyValue(student.ol_results) ? student.ol_results.id : "",
            olYear : checkEmptyValue(student.ol_results) ? student.ol_results.year_of_examination : new Date(),
            olIndex :checkEmptyValue(student.ol_results) ? student.ol_results.index_no : "",
            olMath :checkEmptyValue(student.ol_results) ? student.ol_results.math : "",
            olScience : checkEmptyValue(student.ol_results) ? student.ol_results.science : "",
            olEnglish : checkEmptyValue(student.ol_results) ? student.ol_results.english : "",
            olRemark : checkEmptyValue(student.ol_results) ? student.ol_results.remark : "",

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

    const addStreamType = (value) => {
        if (value !== null) {
            if (value.stream_type !== null) {
                const stream_type = value.stream_type;
                setStreamType((streamType) => [{...stream_type}, ...streamType]);
            }
        }
    }

    useEffect(() => {

        const fetchStudent = async () => {
            try {
                const response = await StudentService.getById(id);
                addDisplayVisibleAl(response.student.al_results);
                addDisplayVisibleOl(response.student.ol_results);
                addStreamType(response.student.al_results);
                addStudentData(response.student);
                const course = checkEmptyValue(response.student.course) ?  response.student.course : {};
                setCourseName((cn) => [{...course}, ...cn]);

                setIsLoading2(false);
            } catch (err) {
                return  setIsLoading2(true);
            }
        };

        const fetchCourseName = async () => {
            try {
                const response = await HelperService.getCourseName();
                setCourseName(response.course);
                setIsLoading3(false);
            } catch (err) {
                Notification.DataUpdatedFailed("Consignee Form");
                return setIsLoading3(false);
            }
        };

        fetchCourseName();

        fetchStudent();

    }, []);

    const handleSelectChange = (event, value) => {
        setStudentForm({
            ...studentForm,
            streamType: checkObjectEmpty(value),
        });
    };

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

    const handleClickSave = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true);
            let data = {...studentForm, ...stateOl, ...stateAl};
            const response = await StudentService.update(data);
            setIsLoading(false);
            props.history.push("/student");
            Notification.DataUpdatedSuccess("Updated");
        } catch (err) {
            Notification.DataUpdatedFailed("Student Form");
            return setIsLoading(false);
        }
    };

    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <h4 className="cardTitleWhite">Edit Student</h4>
                </CardHeader>
                {isLoading2 ? (
                    <Loader/>
                ) : isLoading3 ? ( <Loader/>): (
                    <div>
                        <form autoComplete="off" onSubmit={handleClickSave}>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={2}>
                                    <div style={{ marginTop: "10px" }}>
                                        <lable>Title</lable>
                                        <Autocomplete
                                            id="title"
                                            name="title"
                                            options={Title}
                                            defaultValue={studentForm.title}
                                            getOptionLabel={(option) => option}
                                            onChange={(event, value) =>
                                                setStudentForm({
                                                    ...studentForm,
                                                    title: value,
                                                })
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    margin="normal"
                                                    placeholder="Title"
                                                    required
                                                />
                                            )}
                                        />
                                    </div>
                                </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>First Name</lable>
                                            <TextField
                                                id="firstName"
                                                name="firstName"
                                                margin="normal"
                                                required
                                                value={studentForm.first_name}
                                                fullWidth
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        first_name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Last Name</lable>
                                            <TextField
                                                id="lastName"
                                                margin="normal"
                                                required
                                                fullWidth
                                                placeholder="Last Name"
                                                value={studentForm.last_name}
                                                name="lastName"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        last_name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Name on Certification</lable>
                                            <TextField
                                                id="certificationName"
                                                margin="normal"
                                                required
                                                fullWidth
                                                placeholder="Name on Certification"
                                                value={studentForm.certification_name}
                                                name="certificationName"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        certification_name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Course Name</lable>
                                            <Autocomplete
                                                id="courseName"
                                                name="courseName"
                                                options={getUnique(courseName, "id")}
                                                defaultValue={courseName[0]}
                                                getOptionLabel={(option) => option.name}
                                                onChange={(event, value) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        courseName: checkObjectEmpty(value),
                                                    })
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        margin="normal"
                                                        placeholder="Course Name"
                                                        required
                                                    />
                                                )}
                                            />
                                        </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Date of Birth</lable>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="dateOfBirth"
                                                    fullWidth
                                                    format="MM/dd/yyyy"
                                                    required
                                                    placeholder="Date of Birth"
                                                    value={studentForm.date_of_birth}
                                                    onChange={(value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            date_of_birth: value,
                                                        })
                                                    }
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={4}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Address</lable>
                                            <TextField
                                                id="address"
                                                margin="normal"
                                                multiline
                                                required
                                                fullWidth
                                                value={studentForm.address}
                                                placeholder="Address"
                                                name="address"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        address: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={2}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Gender</lable>
                                            <Autocomplete
                                                id="gender"
                                                name="gender"
                                                options={Gender}
                                                defaultValue={studentForm.gender}
                                                getOptionLabel={(option) => option}
                                                onChange={(event, value) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        gender: value,
                                                    })
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        margin="normal"
                                                        placeholder="Gender"
                                                        required
                                                    />
                                                )}
                                            />
                                        </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Nationality</lable>
                                            <Autocomplete
                                                id="nationality"
                                                options={Nationality}
                                                required
                                                defaultValue={studentForm.nationality}
                                                name="nationality"
                                                getOptionLabel={(option) => option}
                                                onChange={(event, value) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        nationality: value,
                                                    })
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        margin="normal"
                                                        placeholder="Gender"
                                                    />
                                                )}
                                            />
                                        </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Nic / Passport No</lable>
                                            <TextField
                                                id="nic_passport_no"
                                                margin="normal"
                                                required
                                                fullWidth
                                                value={studentForm.nic_or_passport_no}
                                                placeholder="Nic / Passport No"
                                                name="nic_passport_no"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        nic_or_passport_no: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={4}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>E-mail</lable>
                                            <TextField
                                                id="email"
                                                margin="normal"
                                                required
                                                fullWidth
                                                placeholder="E-mail"
                                                value={studentForm.email}
                                                name="email"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Personal Mobile No</lable>
                                            <TextField
                                                id="personalNo"
                                                margin="normal"
                                                required
                                                fullWidth
                                                placeholder="Personal Mobile"
                                                value={studentForm.tell_phone_personal}
                                                name="personalNo"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        tell_phone_personal: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Home Mobile No</lable>
                                            <TextField
                                                id="homeNo"
                                                margin="normal"
                                                fullWidth
                                                placeholder="Home Mobile (optional)"
                                                value={studentForm.tell_phone_home}
                                                name="homeNo"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        tell_phone_home: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Office Mobile No</lable>
                                            <TextField
                                                id="officeNo"
                                                margin="normal"
                                                fullWidth
                                                placeholder="Office Mobile (optional)"
                                                name="officeNo"
                                                value={studentForm.tell_phone_office}
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        tell_phone_office: e.target.value,
                                                    })
                                                }
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
                                <FormGroup row style={{ display : olDisplay}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={stateOl.checkedOl}
                                                onChange={handleChangeOl}
                                                name="checkedOl"
                                                color="primary"
                                                disabled
                                            />
                                        }
                                        label="O/L Result"
                                    />
                                </FormGroup>
                                { stateOl.checkedOl ? (
                                    <>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Year of Examination</lable>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        id="yearOfExamination"
                                                        fullWidth
                                                        format="MM/dd/yyyy"
                                                        required
                                                        placeholder="Year of Examination"
                                                        value={studentForm.olYear}
                                                        onChange={(value) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                olYear: value,
                                                            })
                                                        }
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={3}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Index No</lable>
                                                <TextField
                                                    id="indexNo"
                                                    margin="normal"
                                                    multiline
                                                    fullWidth
                                                    placeholder="Index No (optional)"
                                                    value={studentForm.olIndex}
                                                    name="indexNo"
                                                    onChange={(e) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            olIndex: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>English</lable>
                                                <Autocomplete
                                                    id="olEnglish"
                                                    name="olEnglish"
                                                    options={Grade}
                                                    defaultValue={studentForm.olEnglish}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            olEnglish: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="English"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Math</lable>
                                                <Autocomplete
                                                    id="olMath"
                                                    name="olMath"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.olMath}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            olMath: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Math"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                    </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Science</lable>
                                                    <Autocomplete
                                                        id="olScience"
                                                        name="olScience"
                                                        options={Grade}
                                                        getOptionLabel={(option) => option}
                                                        defaultValue={studentForm.olScience}
                                                        onChange={(event, value) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                olScience: value,
                                                            })
                                                        }
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                margin="normal"
                                                                placeholder="Science"
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={12} sm={12} md={6}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Remark</lable>
                                                    <TextField
                                                        id="remark"
                                                        margin="normal"
                                                        multiline
                                                        fullWidth
                                                        placeholder="Remark (optional)"
                                                        name="remark"
                                                        value={studentForm.olRemark}
                                                        onChange={(e) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                olRemark: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    </>
                                ) : (
                                    <></>
                                )}

                                <FormGroup row style={{ display : alDisplay}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={stateAl.checkedAl}
                                                onChange={handleChangeAl}
                                                name="checkedAl"
                                                color="primary"
                                                disabled
                                            />
                                        }
                                        label="A/L Result"
                                    />
                                </FormGroup>
                                { stateAl.checkedAl ? (
                                    <>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Stream Type</lable>
                                                    <TextField
                                                        id="streamType"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        disabled
                                                        placeholder="Stream Type"
                                                        value={studentForm.streamType && studentForm.streamType.name}
                                                        name="streamType"
                                                    />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={12} sm={12} md={3}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Year of Examination</lable>
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <KeyboardDatePicker
                                                            margin="normal"
                                                            id="alYyearOfExamination"
                                                            fullWidth
                                                            format="MM/dd/yyyy"
                                                            required
                                                            placeholder="Year of Examination"
                                                            value={studentForm.alYear}
                                                            onChange={(value) =>
                                                                setStudentForm({
                                                                    ...studentForm,
                                                                    alYear: value,
                                                                })
                                                            }
                                                            KeyboardButtonProps={{
                                                                'aria-label': 'change date',
                                                            }}
                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </GridItem>

                                            <GridItem xs={12} sm={12} md={3}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Index No</lable>
                                                    <TextField
                                                        id="alIndexNo"
                                                        margin="normal"
                                                        multiline
                                                        fullWidth
                                                        placeholder="Index No (optional)"
                                                        name="alIndexNo"
                                                        value={studentForm.alIndex}
                                                        onChange={(e) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                alIndex: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </GridItem>

                                        </GridContainer>
                                    </>
                                ) : (
                                    <></>
                                )}

                                { studentForm.streamType.id === 1 && (
                                 <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Chemistry</lable>
                                                <Autocomplete
                                                    id="sciechemistry"
                                                    name="sciechemistry"
                                                    defaultValue={studentForm.sciechemistry}
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            sciechemistry: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Chemistry"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Biology</lable>
                                                <Autocomplete
                                                    id="sciebiology"
                                                    name="sciebiology"
                                                    options={Grade}
                                                    defaultValue={studentForm.sciebiology}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            sciebiology: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Biology"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Physics</lable>
                                                <Autocomplete
                                                    id="sciephysics"
                                                    name="sciephysics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.sciephysics}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            sciephysics: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Physics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Agricultural Science</lable>
                                                <Autocomplete
                                                    id="agriculturalScience"
                                                    name="agriculturalScience"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.agriculturalScience}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            agriculturalScience: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Agricultural Science"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>English</lable>
                                                <Autocomplete
                                                    id="scieenglish"
                                                    name="scieenglish"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.scieenglish}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            scieenglish: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="English"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                )}

                                {studentForm.streamType.id  === 2 && (
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Chemistry</lable>
                                                <Autocomplete
                                                    id="mathchemistry"
                                                    name="mathchemistry"
                                                    options={Grade}
                                                    defaultValue={studentForm.mathchemistry}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            mathchemistry: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Chemistry"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Mathematics</lable>
                                                <Autocomplete
                                                    id="combined_mathematics"
                                                    name="combined_mathematics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.combined_mathematics}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            combined_mathematics: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Mathematics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Physics</lable>
                                                <Autocomplete
                                                    id="mathphysics"
                                                    name="mathphysics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.mathphysics}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            mathphysics: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Physics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>ICT</lable>
                                                <Autocomplete
                                                    id="mathict"
                                                    name="mathict"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.mathict}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            mathict: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="ICT"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>English</lable>
                                                <Autocomplete
                                                    id="mathenglish"
                                                    name="mathenglish"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.mathenglish}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            mathenglish: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="English"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                )}

                                {studentForm.streamType.id === 3 && (
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Business Studies</lable>
                                                <Autocomplete
                                                    id="business_studies"
                                                    name="business_studies"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.business_studies}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            business_studies: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Business Studies"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Economics</lable>
                                                <Autocomplete
                                                    id="economics"
                                                    name="economics"
                                                    options={Grade}
                                                    defaultValue={studentForm.economics}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            economics: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="economics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Accounting</lable>
                                                <Autocomplete
                                                    id="accounting"
                                                    name="accounting"
                                                    options={Grade}
                                                    defaultValue={studentForm.accounting}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            accounting: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Accounting"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>ICT</lable>
                                                <Autocomplete
                                                    id="comict"
                                                    name="comict"
                                                    options={Grade}
                                                    defaultValue={studentForm.comict}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            comict: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="ICT"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>English</lable>
                                                <Autocomplete
                                                    id="comenglish"
                                                    name="comenglish"
                                                    options={Grade}
                                                    defaultValue={studentForm.comenglish}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            comenglish: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="English"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                )}

                                { studentForm.streamType.id === 4 && (
                                    <>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Tamil</lable>
                                                <Autocomplete
                                                    id="tamil"
                                                    name="tamil"
                                                    defaultValue={studentForm.tamil}
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            tamil: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Tamil"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Hindu Culture</lable>
                                                <Autocomplete
                                                    id="hinduCulture"
                                                    name="hinduCulture"
                                                    options={Grade}
                                                    defaultValue={studentForm.hinduCulture}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            hinduCulture: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Hindu Culture"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Politic</lable>
                                                <Autocomplete
                                                    id="politic"
                                                    name="politic"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.politic}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            politic: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Physics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Economics</lable>
                                                <Autocomplete
                                                    id="economics"
                                                    name="economics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.artEconomics}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            artEconomics: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="Economics"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Geographic</lable>
                                                <Autocomplete
                                                    id="geographic"
                                                    name="geographic"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    defaultValue={studentForm.geographic}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            geographic: value,
                                                        })
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            margin="normal"
                                                            placeholder="English"
                                                            required
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>English</lable>
                                                    <Autocomplete
                                                        id="artEnglish"
                                                        name="artEnglish"
                                                        options={Grade}
                                                        defaultValue={studentForm.artEnglish}
                                                        getOptionLabel={(option) => option}
                                                        onChange={(event, value) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                artEnglish: value,
                                                            })
                                                        }
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                margin="normal"
                                                                placeholder="English"
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </GridItem>

                                            <GridItem xs={12} sm={12} md={6}>
                                                <div style={{ marginTop: "10px" }}>
                                                    <lable>Remark</lable>
                                                    <TextField
                                                        id="artRemark"
                                                        margin="normal"
                                                        multiline
                                                        fullWidth
                                                        placeholder="Remark (optional)"
                                                        name="artRemark"
                                                        value={studentForm.artRemark}
                                                        onChange={(e) =>
                                                            setStudentForm({
                                                                ...studentForm,
                                                                artRemark: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    </>
                                )}
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
                                    <GridItem xs={12} sm={12} md={5}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Work Experience</lable>
                                            <TextField
                                                id="workExperience"
                                                margin="normal"
                                                multiline
                                                fullWidth
                                                placeholder="Work Experience (optional)"
                                                name="workExperience"
                                                value={studentForm.work_exp}
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        work_exp: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={5}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Other Qualification</lable>
                                            <TextField
                                                id="otherQua"
                                                margin="normal"
                                                multiline
                                                fullWidth
                                                placeholder="Other Qualification (optional)"
                                                name="otherQua"
                                                value={studentForm.other_quali}
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        other_quali: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                {isLoading ? (
                                    <LinearProgress style={{ width: "100%" }} />
                                ) : (
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            className={classes.button}
                                            startIcon={<Save />}
                                            type="submit"
                                        >
                                            Save
                                        </Button>

                                        <Button
                                            variant="contained"
                                            size="small"
                                            className={classes.button}
                                            startIcon={<CancelPresentationOutlined />}
                                            onClick={handleClickCancel}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </CardFooter>
                        </form>
                    </div>
                )}
            </Card>
        </div>
    );
}

EditStudent.propTypes = {};

EditStudent.defaultProps = {};

export default EditStudent;
