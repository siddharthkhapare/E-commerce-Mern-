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
        <Route path="e-commerce-pro/" exact={true} strict component={Home}/>
        <Route path="e-commerce-pro/Aboutus" exact={true} strict component={Aboutus}/>
        <Route path="e-commerce-pro/Contactus" exact={true} strict component={Contactus}/>
        <Route path="e-commerce-pro/login" exact={true} strict component={Login}/>
        <Route path="e-commerce-pro/signup" exact={true} strict component={Signup}/>
        <Route path="e-commerce-pro/admin" exact={true} strict component={AdminLogin}/>
        <Route path="e-commerce-pro/products" exact={true} strict component={Product}/>
        <Route path="e-commerce-pro/addingproductsform" exact={true} strict component={AddingProductsForm}/>
        <Route path="e-commerce-pro/ViewProducts" exact={true} strict component={ViewProducts}/>
        <Route path="e-commerce-pro/mycart" exact={true} strict component={ShoppingCart}/>
        <Route path="e-commerce-pro/dashboard" exact={true} strict component={Dashboard}/>
        <Route path="e-commerce-pro/updateProduct" exact={true} strict component={UpdateProduct}/>
        <Route path="e-commerce-pro/CheckOut" exact={true} strict component={CheckOut}/>
        <Route path="e-commerce-pro/ShopByBrand" exact={true} strict component={SBBProduct}/>


      </div>
    </BrowserRouter>
  );
 

  
}

export default App;
