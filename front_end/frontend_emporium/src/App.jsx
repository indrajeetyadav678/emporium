import { BrowserRouter, Routes, Route } from "react-router-dom";

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Checkout from "./checkout";
// import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import SignUp from "./component_customer_01/SignUp";
import SignIn from "./component_customer_01/SignIn";

// import Checkout from "./checkout";
import Cart from "./component_cutomer_02/Cart";

import Addproduct from "./addproducts";
import HomeTheater from "./component_cutomer_02/home_theater_page";


const App=()=>{
  // for animation
  useEffect(() => {
    AOS.init({
         duration: 500,
         once: false,
       })
  }, [])







  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          
            <Route path="home" element={<Home/>} />
            {/* <Route path="contact" element={<Contact/>} /> */}
            <Route path="about" element={<About/>} />
            {/* <Route path="sign_up" element={<Signup/>} /> */}
            <Route path="checkout" element={<Checkout/>} />
            <Route path="about" element={<About/>} />

            <Route path="sign_up" element={<SignUp/>} />

            <Route path="signin" element={<SignIn/>} />



            <Route path="cart" element={<Cart/>} />

            <Route path="checkout" element={<Checkout/>} />          
            <Route path="addproduct" element={<Addproduct/>} />          
                
            <Route path="checkout" element={<Checkout/>} />
            <Route path="home_theater_page" element={<HomeTheater/>}/>

           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;