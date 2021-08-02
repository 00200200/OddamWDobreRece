import './scss/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import LogIn from "./components/LogIn"
import SignIn from "./components/SignIn"
import "./scss/home.scss"
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/logowanie' component={LogIn}></Route>
                    <Route exact path='/rejestracja' component={SignIn}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;