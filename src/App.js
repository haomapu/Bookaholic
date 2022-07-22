import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import DescripPage from './DescripPage/DescripPage';
import LoginPage from './LoginPage/LoginPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<DescripPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>


  );
}

export default App;