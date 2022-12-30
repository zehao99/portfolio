import React from 'react';
import Colors from './styles/Colors';
import PageRouter from './PageRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const AppDefaultContainer = styled.div`
    color: ${Colors.primaryFontColor};
`;

const App = (props) => {
    const preventDefaultEvent = (e) => {
        e.preventDefault();
    };
    return (
        <Router>
            <AppDefaultContainer
                onContextMenu={preventDefaultEvent}
                onDoubleClick={preventDefaultEvent}
                onDragStart={preventDefaultEvent}
            >
                <PageRouter />
            </AppDefaultContainer>
        </Router>
    );
};

export default App;
