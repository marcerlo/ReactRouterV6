import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginScreem from '../components/login/LoginScreem';
import { DashoardRoute } from './DashoardRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/login" element={<LoginScreem/>} />
    <Route path= "/*"  element={<DashoardRoute/>}/>
    
  </Routes>
  </BrowserRouter>
  )
}

export default AppRouter