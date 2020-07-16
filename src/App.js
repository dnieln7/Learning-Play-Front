import './App.css';

import React from 'react';
import NavBar from "./components/navbar/nav-bar";
import {Home} from "./pages/home/home";
import {Login} from "./pages/auth-pages/login";
import {SignUp} from "./pages/auth-pages/sign-up";
import {Hub} from "./pages/hub/hub";
import {TestCreator} from "./pages/teacher-pages/test-creator/test-creator";
import {PublishedTestList} from "./pages/teacher-pages/published-test-list";
import {PublishedTestView} from "./pages/teacher-pages/published-test-view";
import {AvailableTestList} from "./pages/student-pages/available-test-list";
import {AvailableTestView} from "./pages/student-pages/available-test-view";
import {AnsweredTestList} from "./pages/teacher-pages/answered-test-list";
import {AnsweredTestView} from "./pages/teacher-pages/answered-test-view";
import {GradedTestList} from "./pages/student-pages/graded-test-list";
import {PublishedPostList} from "./pages/published-post-list";
import {PostCreator} from "./pages/teacher-pages/post-creator";
import {PublishedPostView} from "./pages/published-post-view";

const Switch = require("react-router-dom").Switch;
const Redirect = require("react-router-dom").Redirect;
const Route = require("react-router-dom").Route;

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Redirect from={"/"} to={"/home"} exact/>
                <Route path="/home" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/sign-up" exact component={SignUp}/>

                <Route path="/hub" exact component={Hub}/>

                <Route path="/test/creator" exact component={TestCreator}/>
                <Route path="/test/published" exact component={PublishedTestList}/>
                <Route path="/test/published/:id" exact component={PublishedTestView}/>
                <Route path="/test/answered" exact component={AnsweredTestList}/>
                <Route path="/test/answered/:id" exact component={AnsweredTestView}/>

                <Route path="/test/available" exact component={AvailableTestList}/>
                <Route path="/test/available/:id" exact component={AvailableTestView}/>
                <Route path="/test/graded" exact component={GradedTestList}/>

                <Route path="/post/creator" exact component={PostCreator}/>
                <Route path="/post/published" exact component={PublishedPostList}/>
                <Route path="/post/published/:id" exact component={PublishedPostView}/>
            </Switch>
        </div>
    );
}

export default App;
