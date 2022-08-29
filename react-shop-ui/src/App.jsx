import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Edit_user from "./pages/Edit_user";
import Productlist from "./pages/ProductList";
import OrderList from "./pages/OrderList";

import AddOrder from "./pages/addOrder";

import Navbar from "./components/Navbar"; 

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import React, {userState} from "react";
const App = () => {
   
  // return <Home/>
  // return <Login/>;
    // return <Register/>
    // return <User/>
    // return <Edit_user/>

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="/edit_user" element={<Edit_user/>} />
        <Route exact path="/ProductList" element={<Productlist/>} />
        <Route exact path="/OrderList" element={<OrderList/>} />

        <Route exact path="/AddOrder" element={<AddOrder/>} />


      </Routes>
    </Router>
  )

  
};

export default App;