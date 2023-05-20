import React from "react";
import "./App.css"
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Videos } from "./components/Videos";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <NavBar />
        <Videos/>
      </div>
    </div>
  );
};

export default App;