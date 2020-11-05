import { makeStyles } from '@material-ui/core';
import React, { forwardRef } from 'react';
import {
    Edit, AddBox,
    ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, FilterList, FirstPage, LastPage,
    Remove, SaveAlt, Search, ViewColumn, Save
} from '@material-ui/icons';
import {green} from "@material-ui/core/colors";




export const DRAWER_WIDTH = 240;
export const USE_STYLES_FOR_MAIN_CONTENT = makeStyles((theme) => ({
    shiftTextLeft: {
        marginLeft: '80px'
    },
    shiftTextRight: {
        marginLeft: DRAWER_WIDTH,
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    },
    textField: {
        margin: theme.spacing(1),
        width: '45%'
    },
    autoComplete: {
        margin: theme.spacing(1),
        width: '45%'
    },
    button: {
        margin: theme.spacing(1),
    },
    box: {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        style: { width: '5rem', height: '5rem' },
    },
    textFieldPaymentType: {
        margin: theme.spacing(1),
        maxWidth: '99%'
    },
    textFieldExpenseType : {
        margin: theme.spacing(1),
        maxWidth: '99%'
    },
    appBar: {
        position: 'relative',
    },
    archiveButton : {
        marginLeft: "250px",
        fontWeight : "200px"
    }
}));


export const TABLE_ICONS = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
