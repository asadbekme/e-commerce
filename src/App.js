import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, CategoryProduct, ProductSingle, Cart, Search } from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductSingle />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path = "/search/:searchTerm" element = {<Search />} />
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </div>
  );
};

export default App;