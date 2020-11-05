import React, { useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Button from "../../../components/CustomButtons/Button";
import {Chip } from "material-table";
import Avatar from '@material-ui/core/Avatar';
import {Dialog} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


function AddAlbum (props) {

    return (
        <div>
            <Dialog onClose={props.handleCloseAddAlbum} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleCloseAddAlbum}>
                    Add Album
                </DialogTitle>
                <DialogContent>
                    <div style={{ width: '500px', height: '250px'}}>
                        <Avatar src={props.selectedFile}
                                style={{ width: '500px', height: '250px', borderRadius : '5%' }}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    {props.isLoading ? (<div className="loader"><LinearProgress color="primary"/></div>) : (
                        <>
                            <input
                                accept="image/*"
                                className="input"
                                id="contained-button-file"
                                type="file"
                                style={{ display: "none"}}
                                onChange={props.handleUploadClickAdd}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    {props.text}
                                </Button>
                            </label>
                            <Button variant="contained" style={{ display: props.visible}} onClick={() => props.handleClickSaveAlbum()}  color="rose">Save</Button>
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddAlbum;












