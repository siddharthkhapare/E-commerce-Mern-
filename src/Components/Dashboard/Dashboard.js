import React, { Fragment } from 'react';
import { Redirect } from 'react-router'
import '../css/Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';

const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/admin'
}


function Dashboard() {
    return (
        <Fragment>
              {sessionStorage.getItem('isLoggedIn') ?
            <div className="dashboard">
            
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div /></div>
                   
                    <div className="menu">
                    
                        <div>                      
                            <ul>                         
                                <li><Link to="/dashboard">My account</Link></li>
                                <li><Link to="/addingproductsform">Products</Link></li>
                                <li><Link to="/dashboard">Orders</Link></li>
                                <li><Link to="#" onClick={logoutHandler}>Logout</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="text-center">Admin Panel</h2>

                <h1 className="text-center text-light text-uppercase m-5">Page under construction</h1>



            </div>
               :
               <Redirect to="https://e-commerceproj.netlify.app/admin" />
           }
        </Fragment>
    )
}

export default Dashboard
