import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { MenuList, MenuItem } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftTwoTone";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import logo from "../../schroders-logo.png";
import { getAuthorizedMenuItems } from "../utils/authorizedMenuItems";
import { connect } from "react-redux";
import styles from "./theme";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import LoadingProgress from "../common/LoadingProgress";
/* eslint-disable */
class FinPLLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, children } = this.props;
    const { open } = this.state;
    const tabs = getAuthorizedMenuItems(this.props.user);
    const drawer = (
      <div>
        <MenuList>
          {tabs.map((el, i) => (
            <MenuItem key={i} component={Link} to={el.route}>
              {el.label}
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap />
            <Tooltip title="Home" aria-label="Add">
              <img
                src={logo}
                className={classes.imglogo}
                alt="Schroders"
                onClick={event =>
                  this.props.history.push({
                    pathname: "/"
                  })
                }
              />
            </Tooltip>
            <section className={classes.rightToolbar}>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                {this.props.user.name}
                <AccountCircle className={classes.rightIcon} />
              </IconButton>
            </section>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ fill: "#FFFFFF" }} />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          {drawer}
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {children}

          <LoadingProgress />
        </main>
      </div>
    );
  }
}

FinPLLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.app.user
  };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(FinPLLayout);
