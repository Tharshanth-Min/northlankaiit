/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PerfectScrollbar from "perfect-scrollbar";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.js";
import logo from "../../assets/img/reactlogo.png";
import styles from "../../assets/jss/material-dashboard-react/components/sidebarStyle.js";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import bgImage from "../../assets/img/sidebar-2.jpg";
import routes from "../../routes/routes.js";
import Navbar from "../../components/Navbars/Navbar";

const useStyles = makeStyles(styles);
let ps;

export default function Sidebar(props, { ...rest }) {
    const mainPanel = React.createRef();
  const classes = useStyles();
    const [image, setImage] = React.useState(bgImage);
    const [logoText, setLogoText] = React.useState("NorthLanka IIT");
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.hasOwnProperty('icon') && prop.hasOwnProperty('name') ) {

         const listItemClasses = classNames({
                [" " + classes["blue"]]: activeRoute(prop.path)
            });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute( prop.path)
        });

        return (
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
                <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                />

              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses )}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      }})}
    </List>
  );

  let brand = (
    <div className={classes.logo}>
      <a
        href="#"
        className={classNames(classes.logoLink)}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        <span className={classes.logoTextt}>{logoText}</span>
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
              {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
