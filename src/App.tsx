import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './components/router/RouterApp';
import Header from './components/UI/Header/Header';

export default function App() {
  return (
    <div style={{minHeight: '100vh', height: '100vh'}}>
      <Header/>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}


