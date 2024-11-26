import React, { useState } from 'react'
import ProductPage from './pages/ProductPage'
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div>
          <Outlet/>
      </div>
    );
  }

export default App
