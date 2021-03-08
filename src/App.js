import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from '../src/Components/Home'
import Aboutus from './Components/Aboutus/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Login from './Components/Login';
import Signup from './Components/Signup'
import AdminLogin from './Components/AdminLogin'
import AddingProductsForm from './Components/AddingProductsForm';
import ViewProducts from './Components/Dashboard/ViewProducts';
import Product from './Components/Products/Product';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Dashboard from './Components/Dashboard/Dashboard';
import UpdateProduct from './Components/Dashboard/UpdateProduct';
import CheckOut from './Components/ShoppingCart/CheckOut';
import SBBProduct from './Components/Products/SBBProduct';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} strict component={Home}/>
        <Route path="/Aboutus" exact={true} strict component={Aboutus}/>
        <Route path="/Contactus" exact={true} strict component={Contactus}/>
        <Route path="/login" exact={true} strict component={Login}/>
        <Route path="/signup" exact={true} strict component={Signup}/>
        <Route path="/admin" exact={true} strict component={AdminLogin}/>
        <Route path="/products" exact={true} strict component={Product}/>
        <Route path="/addingproductsform" exact={true} strict component={AddingProductsForm}/>
        <Route path="/ViewProducts" exact={true} strict component={ViewProducts}/>
        <Route path="/mycart" exact={true} strict component={ShoppingCart}/>
        <Route path="/dashboard" exact={true} strict component={Dashboard}/>
        <Route path="/updateProduct" exact={true} strict component={UpdateProduct}/>
        <Route path="/CheckOut" exact={true} strict component={CheckOut}/>
        <Route path="/ShopByBrand" exact={true} strict component={SBBProduct}/>


      </div>
    </BrowserRouter>
  );
 

  
}

export default App;
