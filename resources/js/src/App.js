import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './routes';
import "./assets/css/material-dashboard-react.css?v=1.9.0";

function App() {
    return (
        <Router basename={'/dashboard'} >
            <Routes />
        </Router>
    );
}

export default App;