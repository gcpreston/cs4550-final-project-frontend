import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Layout from './Layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SellerProfile from './pages/SellerProfile';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='sellers/'>
            <Route path=':username' element={<SellerProfile />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
