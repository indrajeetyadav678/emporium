import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Contact from "./component_cutomer_02/Contact";


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
// *************** Dashboard files******************
import AdminDashboard from "./component_cutomer_02/AdminDashboard";

const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="about" element={<About/>} />
            <Route path="sign_up" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>} />          
            <Route path="addproduct" element={<Addproduct/>} />          
            <Route path="checkout" element={<Checkout/>} />
            <Route path="home_theater_page" element={<HomeTheater/>}/>
            <Route path="adminDashboard" element={<AdminDashboard/>}/>

           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;