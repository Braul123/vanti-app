
import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginApp from '../login/Login';

export default function RouterApp() {
  return (
    <Routes>
        <Route path='/' element={<LoginApp/>}></Route>
    </Routes>
  )
}
