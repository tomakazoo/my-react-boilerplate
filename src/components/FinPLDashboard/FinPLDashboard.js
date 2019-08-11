import React, { Component } from "react";
import { connect } from "react-redux";
import { getFinPLDashboardStatuses } from "./FinPLDashboard.ActionCreators";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";

class FinPLDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.getFinPLDashboardStatuses();
  }

  render() {
    const columns = [
      {
        name: "interfaceName",
        label: "Interface Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "step",
        label: "Step",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "startDateTime",
        label: "Start Date",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "finishDateTime",
        label: "Finish Date",
        options: {
          filter: true,
          sort: false
        }
      }
    ];

    const options = {
      filterType: "dropdown", //""
      rowsPerPage: 15
    };
    return (
      <div>
        <MUIDataTable
          title={"FinPL Dashboard"}
          data={this.props.statuses}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}
FinPLDashboard.propTypes = {
  statuses: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getFinPLDashboardStatuses: () => dispatch(getFinPLDashboardStatuses())
    }
  };
}

function mapStateToProps(state) {
  return {
    statuses: state.finPlDashboard.statuses
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinPLDashboard);
