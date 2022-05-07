import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, TodoPage, NotFoundPage } from "./pages";

export default function Routes(props) {
    return (
        <>
            <Router basename="/">
                <Switch>
                    <Route path="/todo" component={TodoPage} exact />
                    <Route path="/" component={LoginPage} exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </>
    );
}
