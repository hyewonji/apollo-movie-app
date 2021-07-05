import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Test from "../routes/Test";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" compone={Test} />
            <Route path="/:id" component={Detail} />
        </Router>
    );
}

export default App;
