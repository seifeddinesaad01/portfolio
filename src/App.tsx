import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './copmonents/Navbar';
import {About} from "./copmonents/About"
import { Skills } from './copmonents/Skills';

function App() {
  return (
    <>
      <NavBar/>
      <About />
      <Skills />
    </>
    
  );
}

export default App;
