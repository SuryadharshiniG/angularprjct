import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Landing from '../layouts/Landing';
import Register2 from '../auth/Register2';

const Routers = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register2 />} />
    </Routes>
    
  
    </>
  )
  
};

export default Routers;