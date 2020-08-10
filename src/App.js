import React from "react";
import "./App.css";
import Colors from "./Comp/Colors";
import PageRouter from "./PageRouter";
import { BrowserRouter } from "react-router-dom";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <PageRouter />
        <style jsx>{`
          body {
            color: ${Colors.primaryFontColor};
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
};

export default App;
