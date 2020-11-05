import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle";
import routes from "./routes";
import Navbar from "../components/Navbars/Navbar";
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(styles);
let ps;
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const AdminRoute = ({ component: Component, ...rest }) => {
    const mainPanel = React.createRef();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [isExpand, setIsExpand] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };
    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        // if (navigator.platform.indexOf("Win") > -1) {
        //     ps = new PerfectScrollbar(mainPanel.current, {
        //         suppressScrollX: true,
        //         suppressScrollY: false
        //     });
        //     document.body.style.overflow = "hidden";
        // }
        // window.addEventListener("resize", resizeFunction);
        // // Specify how to clean up after this effect:
        // return function cleanup() {
        //     if (navigator.platform.indexOf("Win") > -1) {
        //         ps.destroy();
        //     }
        //     window.removeEventListener("resize", resizeFunction);
        // };
    }, [mainPanel]);

    return (
        <Route
            {...rest}
            render={(props) => (localStorage.getItem('isAuthenticated') ? (
                <div className={classes.wrapper}>
                <Sidebar
                    open={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                    {...rest}
                />
                    <div className={classes.mainPanel} ref={mainPanel}>
                        <Navbar
                            routes={routes}
                            handleDrawerToggle={handleDrawerToggle}
                            {...rest}
                        />
                    <div className={classes.content}>
                        <div className={classes.container}>
                            <Component {...props} />
                        </div>
                    </div>
                    </div>
                </div>
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            ))
            }/>
    )
};

AdminRoute.propTypes = {
    //isAuthenticated: PropTypes.bool.isRequired,
};

AdminRoute.defaultProps = {};

export default AdminRoute;
