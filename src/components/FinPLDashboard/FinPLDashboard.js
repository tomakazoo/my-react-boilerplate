import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFinPLDashboardStatuses,
  setRefreshTimer,
  getFinPLJobDetails
} from "./FinPLDashboard.ActionCreators";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import Chip from "@material-ui/core/Chip";
// import { columns } from "./FinPLDashboard.Columns";
import * as statusHelper from "../utils/statusHelper";
// import FinPLJobDetails from "../FinPLJobDetails/FinPLJobDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styles from "./theme";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
/* eslint-disable */
class FinPLDashboard extends Component {
  constructor(props) {
    super(props);

    this.refreshInterval = 60000;
    this.refreshTimeout = 1000;
    this.refreshAttempts = 15;
  }

  searchJobDetail = nameKey => {
    for (var i = 0; i < this.props.interfaces.length; i++) {
      if (this.props.interfaces[i].businessName === nameKey) {
        return this.props.interfaces[i];
      }
    }
  };

  componentWillMount() {
    this.props.actions.getFinPLJobDetails();
    this.props.actions.getFinPLDashboardStatuses();
    this.props.actions.setRefreshTimer(
      this.props.actions.getFinPLDashboardStatuses,
      this.refreshInterval
    );
  }

  componentWillUnmount() {
    if (this.props.refreshTimer) {
      clearInterval(this.props.refreshTimer);
    }
  }
  render() {
    const columns = [
      {
        field: "interfaceName",
        title: "Interface Name",
        // render: rowData => (
        //   <FinPLJobDetails
        //     jobDetail={this.searchJobDetail(
        //       rowData ? rowData.interfaceName : ""
        //     )}
        //   />
        // ),
        cellStyle: rowData => ({ padding: "8px" })
      },
      {
        field: "interfaceName",
        title: "HistoryLink",
        render: rowData => (
          <Link
            to={{
              pathname: "/finpldashboardhistory",
              state: { interface: rowData }
            }}
          >
            <p>{rowData.interfaceName}</p>
          </Link>
        )
      },
      {
        field: "step",
        title: "Step",
        cellStyle: rowData => ({ padding: "8px" })
      },
      {
        field: "status",
        title: "Status",
        render: rowData => <div>{statusHelper.statusData(rowData.status)}</div>,
        cellStyle: rowData => ({ padding: "8px" })
      },
      {
        field: "startDateTime",
        title: "Start Date",
        cellStyle: rowData => ({ padding: "8px" })
      },
      {
        field: "finishDateTime",
        title: "Finish Date",
        cellStyle: rowData => ({ padding: "8px" }),
        defaultSort: "desc"
      },
      {
        field: "errorRecordCount",
        title: "Error Count",
        render: rowData => (
          <p>
            {rowData.errorRecordCount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        ),
        cellStyle: rowData => ({ padding: "8px" })
      }
    ];

    const { classes, theme } = this.props;
    return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                  title={"FinPL Dashboard"}
                  data={this.props.statuses}
                  columns={columns}
                  actions={[
                    rowData => ({
                      icon: "arrow_forward",
                      tooltip:
                        "FinPL Job Data Load Tracking - " +
                        rowData.interfaceName,
                      onClick: (event, rowData) =>
                        this.props.history.push({
                          pathname: "/finpljobloadtracking",
                          state: { detail: rowData }
                        })
                    })
                  ]}
                  options={{
                    headerStyle: {
                      backgroundColor: "lightgrey",
                      color: "#003153"
                    },
                    exportButton: true,
                    actionsColumnIndex: -1,
                    pageSize: 10,
                    pageSizeOptions: [5, 10, 25, 50],
                    sorting: true,
                    maxBodyHeight: 550,
                    rowStyle: {
                      height: "49px",
                      padding: "0px"
                    }
                  }}
                  components={{
                    Toolbar: props => (
                      <div>
                        <MTableToolbar {...props} />
                        <div style={{ padding: "0px 10px" }}>
                          <Chip
                            label={`The last refresh: ${
                              this.props.lastRefresh
                            }`}
                            color="secondary"
                            style={{ marginRight: 5, marginBottom: 5 }}
                          />
                        </div>
                      </div>
                    )
                  }}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
FinPLDashboard.propTypes = {
  statuses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  refreshTimer: PropTypes.number,
  lastRefresh: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getFinPLDashboardStatuses: () => dispatch(getFinPLDashboardStatuses()),
      setRefreshTimer: (refreshStatusFunc, refreshInterval) =>
        dispatch(setRefreshTimer(refreshStatusFunc, refreshInterval)),
      getFinPLJobDetails: () => dispatch(getFinPLJobDetails())
    }
  };
}

function mapStateToProps(state) {
  return {
    statuses: state.finPlDashboard.statuses,
    refreshTimer: state.finPlDashboard.refreshTimer,
    lastRefresh: state.finPlDashboard.lastRefresh,
    interfaces: state.finPlDashboard.interfaces
  };
}
export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FinPLDashboard);
