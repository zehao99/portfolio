import React from 'react';
import './App.css';
import Colors from './styles/Colors';
import PageRouter from './PageRouter';
import { BrowserRouter as Router } from 'react-router-dom';

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
