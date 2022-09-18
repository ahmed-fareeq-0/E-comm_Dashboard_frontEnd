import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/"  element={<h1>Product</h1>} />
            <Route path="/add" element={<h1>add Product</h1>} />
            <Route path="/update" element={<h1>update Product</h1>} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
