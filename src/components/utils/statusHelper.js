import React from "react";

export function statusData(value) {
  if (value != null && value == "Failed") {
    return (
      <ul className="failed">
        <li>{value}</li>
      </ul>
    );
  } else if (value != null && value == "Success") {
    return (
      <ul className="success">
        <li>{value}</li>
      </ul>
    );
  } else if (value != null && value == "InProgress") {
    return (
      <ul className="inprogress">
        <li>{value}</li>
      </ul>
    );
  } else if (value != null && value == "Pending") {
    return (
      <ul className="pending">
        <li>{value}</li>
      </ul>
    );
  } else if (value != null && value == "Completed") {
    return (
      <ul className="completed">
        <li>{value}</li>
      </ul>
    );
  }
}
