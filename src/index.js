import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home.js';
import WorkExperience from './components/experience.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import AboutMe from './components/aboutme.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/aboutme" element={<AboutMe/>} />
        <Route path ="/experience" element={<WorkExperience/>} />
        <Route path ="/skills" element={<Skills/>} />
        <Route path ="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
