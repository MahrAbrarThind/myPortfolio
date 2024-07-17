import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//CSS
import "./CSS/app.css";
import "./CSS/header.css";
import "./CSS/home.css";
import "./CSS/about.css";
import "./CSS/skills.css";
import "./CSS/projects.css";
import "./CSS/contact.css";
import "./CSS/footer.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ToastContainer
          position="top-center"
          autoClose={1700}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ fontSize: '14px' }}  
        />
    <App />
  </React.StrictMode>
);
