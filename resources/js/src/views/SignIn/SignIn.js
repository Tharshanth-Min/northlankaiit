import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from '../../services/auth.service';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {green} from "@material-ui/core/colors";
import {Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import logo from "../../assets/img/reactlogo.png";



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.northlankaiit.com">
                North Lanka IIT
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} <p>northlankaiit@yahoo.com | +94 21 492 7088  </p>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        display: 'flex',
        marginLeft: theme.spacing(22)
    },
    buttonProgress: {
        color: green[900],
        position: 'absolute',
        top: '54%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    margin: {
        marginTop: theme.spacing(2),
    },
    logoImage: {
        width: "70px",
        display: "inline-block",
        maxHeight: "70px",
    },
    img: {
        width: "70px",
        verticalAlign: "middle",
        border: "0"
    },
}));

function SignIn(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [response, setResponse] = useState({
        error: false,
        message: '',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value)
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const clearHook = () => {
        setUserName('');
        setPassword('');
    }

    useEffect(() => {
        localStorage.getItem('isAuthenticated') && setIsAuthenticated({
            isAuthenticated : localStorage.getItem('isAuthenticated')
        });
    });

    const handleClickSave= async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const credentials ={
                userName : userName,
                password : password,
            };

            const response = await AuthService.login(credentials);
            setLoading(true);
            setSuccess(true)
            clearHook();
        } catch (error) {
            const errors = Object.values(error.errors);
            errors.join(' ');
            setResponse(response => ({...response, error: true, message: errors}));
            setLoading(false);
        }
    };


    //If user is already authenticated we redirect to entry location.
    if (isAuthenticated) {
        return <Redirect
            to={{
                pathname: `/student`,
                state: { from: props.location },
            }}
        />
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                    <div className={classes.logoImage}>
                        <img src={logo} alt="logo" className={classes.img} />
                    </div>
                <Typography component="h1" variant="h5">
                    North Lanka IIT
                </Typography>
                {response.error && (
                    <Alert severity="error">{response.message}</Alert>
                )}
                <form
                    onSubmit={handleClickSave}
                    className={classes.form}>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="userName"
                        autoFocus
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />

                    <FormControl fullWidth className={clsx(classes.margin)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Sign In
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

SignIn.propTypes = {

};

SignIn.defaultProps = {};

export default SignIn;



