import React from "react";

let key = 0;

const addHeaders = headings => {
  console.log("HEADINGS", headings);
  if (!headings) return;
  return (
    <tr>
      {headings.map(header => {
        return (
          <td className="row-header" key={++key}>
            {header}
          </td>
        );
      })}
    </tr>
  );
};

const addRows = rows => {
  console.log("ROWS", rows);
  if (!rows) return;

  return rows.map(row => {
    return (
      <tr key={++key}>
        {row.map(column => (
          <td key={++key}>{column}</td>
        ))}
      </tr>
    );
  });
};

const DecisionTable = ({ headings, rows }) => (
  <table className="decisiontable">
    <tbody>
      {addHeaders(headings)}
      {addRows(rows)}
    </tbody>
  </table>
);

export default DecisionTable;
