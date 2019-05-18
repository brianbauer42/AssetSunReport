import React from "react";

const Decisions: React.FC = () => {
  return (
    <div className="decisions">
      <h2>Actionables</h2>
      <ol>
        <li>Upgrade/repair inverters in section A</li>
        <li>
          Performance degraded rapidly after weather event: suggest cleaning
        </li>
        <li>Replace outdated panels with more efficient panels</li>
      </ol>
    </div>
  );
};

export default Decisions;
