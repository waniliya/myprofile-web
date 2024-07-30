import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DarkModeProvider } from './DarkModeContext';
import { Suspense } from 'react';
import Loading from './Loading';


ReactDOM.render(
  <Suspense fallback={<Loading />}>
  <DarkModeProvider>
     <App />
  </DarkModeProvider>
  </Suspense>,
  
  document.getElementById('root')
);

