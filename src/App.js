import React, { useEffect } from "react";
import "./App.css";
import Colors from "./Comp/Colors";
import PageRouter from "./PageRouter";
import { HashRouter as Router } from "react-router-dom";
const App = (props) => {
  const preventDefaultEvent = (e) => {
    e.preventDefault();
  };
  return (
    <Router>
      <div
        className="App"
        onContextMenu={preventDefaultEvent}
        onDoubleClick={preventDefaultEvent}
        onDragStart={preventDefaultEvent}
      >
        <PageRouter />
        <style>{`
          body {
            color: ${Colors.primaryFontColor};
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
