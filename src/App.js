import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/addProduct/AddProduct";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
// import Private from "./components/privateComponent/Private.jsx";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          {/* <Route  element={<Private />} /> */}
            <Route path="/"  element={<h1>Product</h1>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>update Product</h1>} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
