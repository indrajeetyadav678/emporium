import { useState } from 'react'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import About from './about'
import Error from './Error'
import Home from "./Home";
import Layout from "./Layout";
import Contact from "./Contact";
import Signup from "./Signup";
import Footer from './Component/Footer'
import Header from './Component/Header



const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
           
            <Route path="Home" element={<Home/>} />
            {/* <Route path="Contact" element={<Contact/>} /> */}
            <Route path="about" element={<About/>} />
            {/* <Route path="Signup" element={<Signup/>} /> */}
            <Route path="Header" element={<Header/>} />
            <Route path="Footer" element={<Footer/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
