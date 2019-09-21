import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import { siteRoutes } from "../../routes/siteRoutes";
import PropTypes from "prop-types";

const styles = () => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  text: {
    display: "inline-block",
    verticalAlign: "text-bottom"
  }
});

class Back extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          <Link
            className={classes.link}
            to={{ pathname: siteRoutes.FINPLDASHBOARD }}
          >
            <KeyboardArrowLeft />
            <span className={classes.text}>Back to Dashboard</span>
          </Link>
        </Typography>
      </div>
    );
  }
}
Back.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Back));
