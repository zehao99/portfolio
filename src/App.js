import React from "react";
import "./App.css";
import Colors from "./Comp/Colors";
import PageRouter from "./PageRouter";
import { HashRouter as Router } from "react-router-dom";
const App = (props) => {
  return (
    <Router>
      <div className="App">
        <PageRouter />
        <style jsx>{`
          body {
            color: ${Colors.primaryFontColor};
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
