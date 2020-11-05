import React, {useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';
import {DialogActions, DialogContentText} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "../components/CustomButtons/Button";
import Grid from "@material-ui/core/Grid/Grid";

export const API_URL = "/api/v1";
export const STORAGE_URL = "/storage/northLankaIIT";

export function getUnique(arr, comp) {
    // store the comparison  values in array
    const unique =  arr.map(e => e[comp])
    // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e]).map(e => arr[e]);

    return unique;
}

export const StreamType = [
    {id : 1 , name : 'Science stream'},
    {id : 2 , name : 'Mathematics stream'},
    {id : 3 , name : 'Commerce stream'},
    {id : 4 , name : 'Arts stream'},
    // {id : 5 , name : 'Technology stream'},
];

export const Gender = ['Male', 'Female', 'Other'];

export const Title = ['Mr', 'Mrs', 'Mis', 'Miss'];

export const Nationality = ['Sri Lankan Tamil', 'Sri Lankan Moors', 'Indian Tamil', 'Sinhalese', 'Other'];

export const Grade = ["A", "B", "C", "S", "F", "Nope"];

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export function ImageDialogBox (props) {
    const [imageLoading, setImageLoading] = useState(true);
    const [skeleton, setSkeleton] = useState("block");

    const imageLoaded = () => {
        setImageLoading(false);
        setSkeleton("none");
    };

    return (
        <div>
            <Dialog
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
            >
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    Image
                </DialogTitle>
                <DialogContent style={{ margin : '0', padding: '0', }}>
                    <img
                        style={{display: imageLoading ? "none" : "block", width : '600px', height: '500px'}}
                        onLoad={imageLoaded}
                        src={STORAGE_URL + '/' + props.folderName + '/' + props.currentSelectedItem.image}
                    />
                    <Skeleton style={{ display: skeleton, width : '600px', height: '500px'}} variant="rect"/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export function DeleteDialogBox (props) {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
                <DialogContent style={{ width: '350px', height: '50px'}} >
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to <b>Delete?</b>
                    </DialogContentText>
                </DialogContent >
                {props.isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>) : (
                    <DialogActions>
                        <Button onClick={() => props.handleDelete(props.currentSelectedItem)} color="primary" autoFocus>
                            Delete
                        </Button>
                        <Button onClick={props.handleClose} color="primary" >
                            Cancel
                        </Button>
                    </DialogActions>)}
            </Dialog>
        </div>
    );
}

export function Loader() {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "30px", marginBottom: "30px" }}
        >
            <CircularProgress size={25}/>
        </Grid>
    );
}