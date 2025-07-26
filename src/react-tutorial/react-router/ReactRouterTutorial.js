import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Menu from "../../pages/Profile";
function ReactRouterTutorial() {
  return (
    <div>
      <Router>
        {/* Anything defines under Router will be accisable for the react-router-dom,
        but does not mean that it has to be a route.
        The links stays static in the page (but still accessing the react-router-dom functionalities
        to change the routes, but anything defines under Routes, will be served as a new component aka pages) */}
        <div>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </div>

        {/* Routes is nothing but to define the route inside it, 
        any route defined inside Routes will be served as a page/component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>Error Page: 404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default ReactRouterTutorial;
