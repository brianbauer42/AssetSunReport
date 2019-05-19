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
              <h3>{Math.trunc((amount.after / amount.before) * 100)}%</h3>
            </td>
          </tr>
        </tablebody>
      </table>
      <img src={chart} alt="value-breakdown" />
      <h2>Summary:</h2>{" "}
      <p>
        The asset reflects a significant unavailability across the whole plant,
        during evaluation period. This appears to be due to a high mean time to
        repair of 10 days.
      </p>
      <h3>Downtime:</h3>
      <p> 20 downtime periods lasting 50 days. </p>
      <h3> Underperformance:</h3>
      <p>
        {" "}
        There is high underperformance in the in October, November, December,
        January, February.{" "}
      </p>
      <h4>Root causes:</h4>
      <ol>
        <li>Soiling Degradation </li>
        <li>Curtailment</li>
      </ol>
      <h4>KPIs</h4>
      <ol>
        <li>Yearly degradation rate: 3%</li>
        <li>Invesment Performance Index: 70% </li>
        <li>Assesment of original design: Conservative</li>
        <li>Optimal Investment Index: 105%</li>
        <li>Upside: 35%</li>
        <li>Investment Rating: AB</li>
      </ol>
    </div>
  );
};

export default InvestmentDetails;
