import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from 'react-router-dom';
import Paths from './Components/Routes/Allpag';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //root
  
  <React.StrictMode>
    
    <Paths/>
   
      
  </React.StrictMode>
 


);

