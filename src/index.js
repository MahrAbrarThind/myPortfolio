import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//CSS
import "./CSS/app.css";
import "./CSS/header.css";
import "./CSS/home.css";
import "./CSS/about.css";
import "./CSS/skills.css";
import "./CSS/projects.css";
import "./CSS/contact.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
