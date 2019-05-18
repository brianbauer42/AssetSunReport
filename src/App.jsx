import React from "react";
import "./App.css";
import ExecutiveSummary from "./components/ExecutiveSummary";
import Header from "./components/Header";
import Decisions from "./components/Decisions";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <ExecutiveSummary />
      <Decisions />
    </div>
  );
};

export default App;
