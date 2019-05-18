import React from "react";
import "./App.css";
import ValueComparison from "./components/ValueComparison";
import Header from "./components/Header";
import InvestmentDetails from "./components/InvestmentDetails";
import Decisions from "./components/Decisions";
import Summary from "./components/Summary";

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <Summary />
      <InvestmentDetails />
      <ValueComparison />
      <Decisions />
    </div>
  );
};

export default App;
