import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import MainView from "./components/mainview/MainView";
import Xcomp from "./components/xcomp/Xcomp";

function App(props) {
  return (
    <>
      <div>
        <Router>
          <Route exact path="/" component={MainView} />
          <Route exact path="/growerhaulerdetail" component={Xcomp} />
        </Router>
      </div>
    </>
  );
}

export default App;
