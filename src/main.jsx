// index.js or App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import {Appprovider} from './Context'



const theme = createTheme(); // You can customize the theme here if needed


const root = createRoot(document.getElementById('root'));
root.render( <BrowserRouter>
  <Appprovider>
  <ThemeProvider theme={theme}>

    <App />
  </ThemeProvider>
  </Appprovider>
  </BrowserRouter>)

  
   
   
  