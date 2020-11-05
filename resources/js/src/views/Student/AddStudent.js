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
import {Gender, Title, StreamType, Nationality, Grade} from "../../_constants/utilities.constants";



function AddStudent(props) {
    const classes = USE_STYLES_FOR_MAIN_CONTENT();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [courseName, setCourseName] = useState(null)
    const [studentForm, setStudentForm] = useState({
        firstName : "",
        lastName : "",
        dateOfBirth: new Date(),
        title : "",
        address : "",
        email : "",
        gender : "",
        courseName : {},
        nicOrPassport: "",
        nationality : "",
        certificationName : "",
        personalNo : "",
        homeNo : "",
        officeNo : "",
        olYear : new Date(),
        olIndex : "",
        olMath : "",
        olScience : "",
        olEnglish : "",
        alYear : new Date(),
        alIndex : "",
        streamType: {},
        businessStudies: "",
        economics: "",
        accounting: "",
        chemistry : "",
        combinedMathematics : "",
        physics : "",
        biology : "",
        agriculturalScience : "",
        ict : "",
        english : "",
        workExpe : "",
        otherQuali : "",
        olRemark : "",
        tamil : "",
        hinduCulture : "",
        artEconomics : "",
        politic : "",
        geographic : "",
        artRemark : "",

    });


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


    const handleSelectChange = (event, value) => {
        setStudentForm({
            ...studentForm,
            streamType: checkObjectEmpty(value),
        });
    };


    useEffect(() => {
        setIsLoading2(true);

        const fetchCourseName = async () => {
            try {
                const response = await HelperService.getCourseName();
                setCourseName(response.course);
                setIsLoading2(false);
            } catch (err) {
                Notification.DataUpdatedFailed("Consignee Form");
                return setIsLoading2(false);
            }
        };
        fetchCourseName();

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



    const handleClickSave = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        try {
            let data = {...studentForm, ...stateOl, ...stateAl};
            const response = await StudentService.create(data);
            setIsLoading(false);
            props.history.push("/student");
            Notification.DataUpdatedSuccess("Registered");
        } catch (err) {
            Notification.DataUpdatedFailed("Student Form");
            return setIsLoading(false);
        }
    };

    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <h4 className="cardTitleWhite">Registration Form</h4>
                </CardHeader>
                {isLoading2 ? (
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ marginTop: "30px", marginBottom: "30px" }}
                    >
                        <CircularProgress size={30} />
                    </Grid>
                ) : (
                    <div>
                        <form autoComplete="off" onSubmit={handleClickSave}>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={2}>
                                        <div style={{ marginTop: "10px" }}>
                                            <lable>Title</lable>
                                            <Autocomplete
                                                id="title"
                                                options={Title}
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
                                                fullWidth
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        firstName: e.target.value,
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
                                                name="lastName"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        lastName: e.target.value,
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
                                                name="certificationName"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        certificationName: e.target.value,
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
                                                options={courseName}
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
                                                    placeholder="Date of Birth"
                                                    value={studentForm.dateOfBirth}
                                                    onChange={(value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            dateOfBirth: value,
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
                                                options={Gender}
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
                                                        placeholder="Nationality"
                                                        required
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
                                                placeholder="Nic / Passport No"
                                                name="nic_passport_no"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        nicOrPassport: e.target.value,
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
                                                name="personalNo"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        personalNo: e.target.value,
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
                                                name="homeNo"
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        homeNo: e.target.value,
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
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        officeNo: e.target.value,
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
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={stateOl.checkedOl}
                                                onChange={handleChangeOl}
                                                name="checkedOl"
                                                color="primary"
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
                                                    id="english"
                                                    options={Grade}
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
                                                    id="math"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
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
                                                        id="science"
                                                        options={Grade}
                                                        getOptionLabel={(option) => option}
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

                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={stateAl.checkedAl}
                                                onChange={handleChangeAl}
                                                name="checkedAl"
                                                color="primary"
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
                                                    <Autocomplete
                                                        id="streamType"
                                                        name="streamType"
                                                        options={StreamType}
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={handleSelectChange}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                margin="normal"
                                                                placeholder="Stream Type"
                                                                required
                                                            />
                                                        )}
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

                                { studentForm.streamType.id === 1 ? (
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Chemistry</lable>
                                                <Autocomplete
                                                    id="chemistry"
                                                    name="chemistry"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            chemistry: value,
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
                                                    id="biology"
                                                    name="biology"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            biology: value,
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
                                                    id="physics"
                                                    name="physics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            physics: value,
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
                                                    id="english"
                                                    name="english"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            english: value,
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

                                ) : studentForm.streamType.id === 2 ? (
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Chemistry</lable>
                                                <Autocomplete
                                                    id="chemistry"
                                                    name="chemistry"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            chemistry: value,
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
                                                    id="combinedMathematics"
                                                    name="combinedMathematics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            combinedMathematics: value,
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
                                                    id="physics"
                                                    name="physics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            physics: value,
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
                                                    id="ict"
                                                    name="ict"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            ict: value,
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
                                                    id="english"
                                                    name="english"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            english: value,
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
                                ) : studentForm.streamType.id === 3 ? (
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Business Studies</lable>
                                                <Autocomplete
                                                    id="businessStudies"
                                                    name="businessStudies"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            businessStudies: value,
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
                                                    id="ict"
                                                    name="ict"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            ict: value,
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
                                                    id="english"
                                                    name="english"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            english: value,
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
                                ) : studentForm.streamType.id === 4 ?(
                                    <>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <div style={{ marginTop: "10px" }}>
                                                <lable>Tamil</lable>
                                                <Autocomplete
                                                    id="tamil"
                                                    name="tamil"
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
                                                <lable>Economics</lable>
                                                <Autocomplete
                                                    id="artEconomics"
                                                    name="artEconomics"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
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
                                                <lable>Politic</lable>
                                                <Autocomplete
                                                    id="politic"
                                                    name="politic"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
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
                                                            placeholder="Politic"
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
                                                            placeholder="Geographic"
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
                                                    id="english"
                                                    name="english"
                                                    options={Grade}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value) =>
                                                        setStudentForm({
                                                            ...studentForm,
                                                            english: value,
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
                                                    id="remark"
                                                    margin="normal"
                                                    multiline
                                                    fullWidth
                                                    placeholder="Remark (optional)"
                                                    name="remark"
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
                                ) : (
                                    <></>
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
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        workExpe: e.target.value,
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
                                                onChange={(e) =>
                                                    setStudentForm({
                                                        ...studentForm,
                                                        otherQuali: e.target.value,
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

AddStudent.propTypes = {};

AddStudent.defaultProps = {};

export default AddStudent;
