import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <main className="App-main">
                        <Switch>
                            <Route path="/add">
                                <Form mode="add"/>
                            </Route>
                            <Route path="/edit/:id">
                                <Form mode="edit" />
                            </Route>
                            <Route path="/">
                                <Dashboard/>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
