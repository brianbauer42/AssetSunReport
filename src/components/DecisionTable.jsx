import React from "react";

const addHeaders = headings => {
  return (
    <tr>
      {headings.forEach(header => {
        return <td>{header}</td>;
      })}
    </tr>
  );
};

const addRows = rows => {
  return rows.map(row => {
    return (
      <tr>
        <td>{row.desctription}</td>
        <td>{row.cost}</td>
      </tr>
    );
  });
};

const DecisionTable = ({ headings, rows }) => (
  <table className="decisiontable">
    {addHeaders(headings)}
    {addRows(rows)}
  </table>
);

export default DecisionTable;
