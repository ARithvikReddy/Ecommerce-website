import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cp from "./Components/Cp";
import Address from "./Components/Address";
import Addproduct from "./Components/Addproduct";
function App() {
  return (
    
    <BrowserRouter>
      <>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/signin" element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cp/>}/>
          <Route path='/Address' element={<Address/>}/>
          <Route path='/Addproduct' element={<Addproduct/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;