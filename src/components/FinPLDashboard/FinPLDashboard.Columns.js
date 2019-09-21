import React from "react";
import * as statusHelper from "../utils/statusHelper";
import FinPLJobDetails from "../FinPLJobDetails/FinPLJobDetails";
// import moment from "moment";
/* eslint-disable */
export const columns = [
  {
    field: "interfaceName",
    title: "Interface Name",
    render: rowData => <FinPLJobDetails jobDetail={rowData} />
  },
  {
    field: "step",
    title: "Step"
  },
  {
    field: "status",
    title: "Status",
    render: rowData => <div>{statusHelper.statusData(rowData.status)}</div>
  },
  {
    field: "startDateTime",
    title: "Start Date"
    // ,
    // render: rowData => (
    //   <p>{moment(rowData.startDateTime).format("MMMM Do YYYY, h:mm:ss a")}</p>
    // )
  },
  {
    field: "finishDateTime",
    title: "Finish Date",
    // render: rowData => (
    //   <p>{rowData.finishDateTime ? '' : moment(rowData.finishDateTime).format("MMMM Do YYYY, h:mm:ss a")}</p>
    // ),
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
    )
  }
];

/* eslint-enable */
