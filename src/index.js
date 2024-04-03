import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import './index.css';
import { GlobalStyle } from './css';
import { AuthProvider } from 'contexts/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="learn-pet-app">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
