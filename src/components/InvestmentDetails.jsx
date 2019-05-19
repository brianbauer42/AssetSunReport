import React from "react";
import chart from "../valuebreakdown.png";

const amount = {
  before: 5000000,
  after: 5700000
};

const InvestmentDetails = () => {
  return (
    <div className="investment-details">
      <table>
        <tablebody>
          <tr>
            <td>
              <h3>Investment Performance</h3>
            </td>
            <td>
              <sup>As-Is ${amount.before}</sup>&frasl;
              <sub>Expected ${amount.after}</sub>
            </td>
            <td>
              <h3>{(amount.after / amount.before) * 100}%</h3>
            </td>
          </tr>
        </tablebody>
      </table>
      <img src={chart} alt="value-breakdown" />
    </div>
  );
};

export default InvestmentDetails;
