import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
);
