import './App.css';

import React from 'react';
import NavBar from "./components/navbar/nav-bar";
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {SignUp} from "./pages/sign-up/sign-up";
import {Hub} from "./pages/hub/hub";
import {FormCreator} from "./pages/form-creator/form-creator";
import {TestList} from "./pages/test-list/test-list";
import {TestView} from "./pages/test-view/test-view";
import {AvailableTestList} from "./pages/available-test-list/available-test-list";
import {TestTakeView} from "./pages/test-take/test-take-view";
import {CompletedTestList} from "./pages/completed-test-list/completed-test-list";
import {TestGradeView} from "./pages/test-grade/test-grade-view";
import {GradedTestList} from "./pages/graded-test-list/graded-test-list";

const Switch = require("react-router-dom").Switch;
const Redirect = require("react-router-dom").Redirect;
const Route = require("react-router-dom").Route;

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Redirect from={"/"} to={"/home"} exact/>
                <Route path="/login" exact component={Login}/>
                <Route path="/sign-up" exact component={SignUp}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/hub" exact component={Hub}/>
                <Route path="/forms/creator" exact component={FormCreator}/>
                <Route path="/forms/list" exact component={TestList}/>
                <Route path="/form/" component={TestView}/>
                <Route path="/completed-forms/list" exact component={CompletedTestList}/>
                <Route path="/completed-forms/grade/:id" exact component={TestGradeView}/>
                <Route path="/available-forms/list" exact component={AvailableTestList}/>
                <Route path="/available-forms/take/:id" exact component={TestTakeView}/>
                <Route path="/graded-forms/list" exact component={GradedTestList}/>
            </Switch>
        </div>
    );
}

export default App;
