import React from "react";
import { BrowserRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
