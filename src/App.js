import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import ProductDetails from './Details/ProductDetails';
import Mobiles from './Pages/Mobiles';
import Laptop from './Pages/Laptop';
import Earbuds from './Pages/Earbuds';
import Tvs from './Pages/Tvs';
import CartDisplay from './Pages/CartDisplay';

function App() {
 
  const cartLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(cartLocalStorage);
  const cartCount = cart.length;

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard cartCount={cartCount}/>} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/mobiles/:id' element={<ProductDetails addToCart={addToCart} />} />
        <Route path='/laptops' element={<Laptop />} />
        <Route path='/laptops/:id' element={<ProductDetails addToCart={addToCart} />} />
        <Route path='/earbuds' element={<Earbuds />} />
        <Route path='/earbuds/:id' element={<ProductDetails addToCart={addToCart} />} />
        <Route path='/tvs' element={<Tvs />} />
        <Route path='/tvs/:id' element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<CartDisplay cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
