import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepositoriesPage from "./pages/Repositories";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
