import React from "react";
import DecisionTable from "./DecisionTable";

const props = {};

const ValueComparison = () => {
  return (
    <div className="value-comparison">
      <h2>Executive Summary</h2>
      <DecisionTable {...props} />
    </div>
  );
};

export default ValueComparison;
