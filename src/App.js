import './App.css';
import Main from './components/Main.js';
import Net from './components/Netflix.js';
import Disn from './components/Disney.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Net" element={<Net />} />
          <Route path="/Disn" element={<Disn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;