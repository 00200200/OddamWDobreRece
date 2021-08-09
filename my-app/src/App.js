import './scss/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import LogIn from "./components/LogIn"
import SignIn from "./components/SignIn"
import "./scss/home.scss"
import LogOut from "./components/LogOut";

import firebase from "./services/firebase";
import {useEffect} from "react";

function App() {


    return (
        <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/logowanie' component={LogIn}></Route>
                    <Route exact path='/rejestracja' component={SignIn}></Route>
                    <Route exact path='/wylogowano' component={LogOut}></Route>
                </Switch>
        </Router>
    );
}

export default App;
