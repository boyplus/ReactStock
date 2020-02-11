import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import Stocks from './Stocks';
import Portfolio from './Portfolio';
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header></Header>
                <div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/stocks" exact component={Stocks}></Route>
                    <Route
                        path="/portfolio"
                        exact
                        component={Portfolio}
                    ></Route>
                </div>
            </Router>
        </div>
    );
};
export default App;
