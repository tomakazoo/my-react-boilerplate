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
import { siteRoutes } from "../../routes/siteRoutes";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "#003153"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: "#003153"
  },
  divIcon: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    justifyContent: "flex-end",
    background: "#003153"
  },
  content: {
    flexGrow: 1,
    padding: "0 1px", // theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  imglogo: {
    height: "60px"
  }
});

class Layout extends React.Component {
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
    const {
      classes,
      theme,
      children,
      location: { pathname }
    } = this.props;
    const { open } = this.state;

    const homeLink = props => <Link to="/" {...props} />;
    const finPlDashboardLink = props => (
      <Link to="/finpldashboard" {...props} />
    );

    const drawer = (
      <div>
        <MenuList>
          <MenuItem
            component={homeLink}
            selected={siteRoutes.ROOT === pathname}
          >
            Home
          </MenuItem>
          <MenuItem
            component={finPlDashboardLink}
            selected={siteRoutes.FINPLDASHBOARD === pathname}
          >
            FinPL Dashboard
          </MenuItem>
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
            <img src={logo} className={classes.imglogo} alt="Schroders" />
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
            <div className={classes.divIcon}>
              <img src={logo} className={classes.imglogo} alt="Schroders" />
            </div>

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
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(Layout);
