import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;