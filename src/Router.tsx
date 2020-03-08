import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const routing = () => (
    <Router>
        <Header />
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
        <Footer />
    </Router>
);

export default routing;
