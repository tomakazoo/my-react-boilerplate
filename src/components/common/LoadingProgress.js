import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose } from "recompose";
import { connect } from "react-redux";
/* eslint-disable */
const styles = theme => ({
  root: {
    backgroundColor: "transparent"
  },

  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden"
  },
  progress: {
    margin: theme.spacing(4),
    backgroundColor: "transparent",
    outline: "none",
    display: "inline-block"
  }
});

class LoadingProgress extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes } = this.props;
    const isLoading = this.props.apiCallsInProgress > 0;
    console.log(isLoading);
    return isLoading ? (
      <Modal open={isLoading}>
        <div className={classes.paper}>
          <CircularProgress className={classes.progress} />
        </div>
      </Modal>
    ) : null;
  }
}

LoadingProgress.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    apiCallsInProgress: state.apiCallsInProgress
  };
}
export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(LoadingProgress);
