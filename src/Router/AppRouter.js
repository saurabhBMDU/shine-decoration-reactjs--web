// src/router/AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About';
import NotFound from '../Component/NotFound/404NotFound';
import Header from '../Component/Common/Header/Header';
import Footer from '../Component/Common/Footer/Footer';
import Login from '../Component/Auth/Login/login';
import Register from '../Component/Auth/Register/register';
import Viewcart from '../Component/Viewcart/viewcart';
import Shop from '../Component/Shop/shop';
import Checkout from '../Component/Checkout/checkout';
import Productdetail from '../Component/Productdetail/productdetail';

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Viewcart />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/productdetail' element={<Productdetail />} />
                <Route element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
