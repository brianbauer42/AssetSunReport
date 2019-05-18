import React from "react";
import DecisionTable from "./DecisionTable";

const decisionTableHeadings = [
  "Action",
  "Cost",
  "Capacity Increase",
  "Value over 10 years"
];

const decisionTableRows = [
  ["Upgrade/repair inverters in section A", "$10,000", ".3 MW", "$400,000"],
  [
    "Performance degraded rapidly after weather event: suggest cleaning",
    "$5,000",
    ".5 MW",
    "$500,000"
  ],
  [
    "Replace degraded panels with new and more efficient panels",
    "$1,000,000",
    "1 MW",
    "$2,000,000"
  ]
];

const props = {
  headings: decisionTableHeadings,
  rows: decisionTableRows
};

const Decisions = () => {
  return (
    <div className="decisions">
      <h2>Actionables</h2>
      <DecisionTable {...props} />
    </div>
  );
};

export default Decisions;
