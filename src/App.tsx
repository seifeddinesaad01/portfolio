import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./copmonents/Navbar";
import { About } from "./copmonents/About";
import { Skills } from "./copmonents/Skills";
import { Projects } from "./copmonents/Projects";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
