import React from "react";
import DecisionTable from "./DecisionTable";

const decisionTableHeadings = ["Possible Action", "Cost"];

const decisionTableRows = [
  { description: "Upgrade/repair inverters in section A", cost: "$10,000" },
  {
    description:
      "Performance degraded rapidly after weather event: suggest cleaning",
    cost: "$5,000"
  },
  {
    description: "Replace outdated panels with more efficient panels",
    cost: "$7,000,000"
  }
];
const props = {
  headings: decisionTableHeadings,
  rows: decisionTableRows
};

const Decisions: React.FC = () => {
  return (
    <div className="decisions">
      <h2>Actionables</h2>
      <DecisionTable {...props} />
    </div>
  );
};

export default Decisions;
