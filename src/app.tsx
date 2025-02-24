import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RepositoriesPage from "./pages/Repositories";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={RepositoriesPage} />
      </Switch>
    </Router>
  );
};

export default App;
