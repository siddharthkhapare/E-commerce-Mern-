import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Header.css'

const Header = () => {

    const logoutHandler = () => {
        sessionStorage.clear();
        window.location.href = '/login'
    }
    
    
    
    const getproduct = (name) => {
        const product = name;
    
        sessionStorage.setItem('product_Name',product);
        //const product_name = sessionStorage.getItem('product_Name');
        // history.push("/products");
        // console.log(product_name);
        
    }


    return (
        <Fragment >

            <header>

                <nav className="navbar fixed-top navbar-expand-lg navbar-light main ">

                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">WoodChemicals</Link>

                        <button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon" /></button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">home</Link>
                                </li>

                                <li className="nav-item dropdown position-static">

                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/" id="navbarDropdown" role="button">Products</Link>

                                    <ul className="dropdown-menu megamenu">
                                        <div className="row">
                                            <li className="col-md-3">
                                                <ul>
                                                    <h6 className="list-header">Asian</h6>
                                                    <hr />
                                                    <li>                                                        
                                                        <Link className="text-capitalize" to="/products"
                                                         onClick={()=> getproduct('melamine')}>melamine</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/products" onClick={()=> getproduct('melamine gold')}>Melamyne Gold</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/products" onClick={()=> getproduct('touchwood')}>Touchwood</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" to="/products"
                                                        onClick={()=> getproduct('interior pu')}>Interior pu</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" to="/products"
                                                        onClick={()=> getproduct('exterior pu')}>Exterior pu</Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <h6 className="list-header">Taralac</h6>
                                                    <hr />
                                                    <li>
                                                        <Link className="text-capitalize" to="/products"
                                                         onClick={() => getproduct('sealer')}>Sealer</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" to="/products"
                                                         onClick={() => getproduct('melamine')}>Melamyne</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" to="/products"
                                                         onClick={() => getproduct('wood stainer')}>Wood Stainer</Link>
                                                    </li>
                                                  
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <h6 className="list-header">Esdee</h6>
                                                    <hr />
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/products" onClick={() => getproduct('sealer')}>Sealer</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    {/* <h6 className="list-header">Emporio</h6>
                                                    <hr />
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/">Melamyne</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/">Exterior pu</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/">Hardner</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="text-capitalize" 
                                                        to="/">Sealer</Link>
                                                    </li> */}

                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/Aboutus">Aboutus</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contactus">Contactus</Link>
                                </li>

                                {sessionStorage.getItem('LoggedIn') ?
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">{sessionStorage.getItem('firstname')} {sessionStorage.getItem('lastname')}</Link>
                                        </li>

                                     
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fa fa-user-circle"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-right" aria-labelledby="navbarDarkDropdownMenuLink">
                                                        {/* <li><Link className="dropdown-item" to="/">My orders</Link></li> */}
                                                        <li><Link className="dropdown-item" to="/mycart">My Cart</Link></li>
                                                        <li><Link className="dropdown-item" to="/" onClick={logoutHandler}>Logout</Link></li>

                                                    </ul>
                                                </li>
                                            </ul>
                                      


                                      
                                    </Fragment>
                                    :
                                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>

                                }





                            </ul>
                        </div>
                    </div>
                </nav>
            </header>



        </Fragment>

    );

}

export default Header
