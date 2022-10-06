import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/addProduct/AddProduct";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import ProductsList from "./pages/products/ProductsList";
import UpdateProduct from "./pages/update/UpdateProduct";
// import Private from "./components/privateComponent/Private.jsx";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          {/* <Route  element={<Private />} /> */}
            <Route path="/" exact  element={<ProductsList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
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
