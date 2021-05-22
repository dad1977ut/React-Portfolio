import "./App.css";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navebar from "./components/navebar";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
function App() {
  return (
    <Router>
      <div>
        <Navebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
