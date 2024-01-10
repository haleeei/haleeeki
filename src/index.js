import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home.js';
import Experience from './components/experience.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import MoreAbout from './components/moreabout.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Home/> 
    {/* Put new components here */}
    <Experience/>
    <Skills/>
    <Projects/>
    <MoreAbout/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
