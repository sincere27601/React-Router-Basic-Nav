import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


const Apple = () => {
    return (
        <div className="App">
            <nav>
                <div className="nav-links" />
                </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            
        </div>
    );
}; 

    


ReactDOM.render(
    <render>
       <App />
        </render>, 
        document.getElementById('root'));
