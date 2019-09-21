import React, { Component } from "react";
import styles from "./theme";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import {
  BarChart,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getFinPLChartStatuses,
  getFinPLJobDetails
} from "./App.ActionCreators";

/* eslint-disable */
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.getFinPLChartStatuses();
    this.props.actions.getFinPLJobDetails();
  }
  render() {
    const { classes, theme } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.fixedHeight} />
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container justify="center" spacing={2}>
                {this.props.interfaces.map((value, index) => {
                  return (
                    <Grid key={index} item>
                      <Paper className={fixedHeightPaper}>
                        {/* <FinPLJobDetails jobDetail={value} /> */}
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={this.props.statuses}
                    width={730}
                    height={250}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    onClick={event =>
                      this.props.history.push({
                        pathname: "/finpldashboard"
                      })
                    }
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="interfaceName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="errorRecordCount" fill="red" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

App.propTypes = {
  statuses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getFinPLChartStatuses: () => dispatch(getFinPLChartStatuses()),
      getFinPLJobDetails: () => dispatch(getFinPLJobDetails())
    }
  };
}

function mapStateToProps(state) {
  return {
    statuses: state.app.statuses,
    interfaces: state.app.interfaces
  };
}
export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
