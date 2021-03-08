import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Axios from 'axios';

//logout handling

const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/admin'
}

function UpdateProduct() {

    // usestate hook with useEffect for finding single product
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {

        const id = localStorage.getItem('_id');
        const pro = await Axios.get('https://node-application5thsem.herokuapp.com/getsingleproduct/' + id)

        setData(pro.data);        
    }

    
    // using usestate hook for setting form values
    data.productName = (data.productName);
    function handleNameChange(e) {
        data.productName = e.target.value;
    }
    console.log(data.productName);
    
    data.productQuantity = (data.productQuantity);
    function handleQuantityChange(e) {
        data.productQuantity = (e.target.value);
    }

    data.productRate = (data.productRate);
    function handleRateChange(e) {
        data.productRate = (e.target.value);
    }

    data.productDescription = (data.productDescription);
    function handleDescriptionChange(e) {
        data.productDescription = (e.target.value);
    }

    // submit handler for sending updated values to patch api
    const submitHandler = (e) => {
        
        
        const formValues = {
            
            productType: data.productType,
            productBrand: data.productBrand,
            productMeasurement: data.productMeasurement,
            productName: data.productName,
            productQuantity: data.productQuantity,
            productRate: data.productRate,
            productDescription: data.productDescription         
        }
        console.log(formValues);

        const id = localStorage.getItem('_id');
        Axios.put('https://node-application5thsem.herokuapp.com/api/find-and-update/' + id,formValues)
        // e.preventDefault();
        .then(res=>{
            
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    

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

                    <div className="insertProduct">

                        <h3 className="mt-5 text-center">Update Products</h3>
                        <div className="container">
                            <div className="row">

                                <form className="row g-3" onSubmit={submitHandler}>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="ProductType">Product Type</label>
                                        <input type="text" className="form-control" value={data.productType} id="productType" disabled />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="productBrand">Product Brand</label>

                                        <input type="text" className="form-control" value={data.productBrand} id="productBrand" disabled />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Product Measurement</label>
                                        <input type="text" className="form-control" value={data.productMeasurement} id="productMeasurement" disabled />
                                    </div>


                                    <div className="col-md-4">
                                        <label htmlFor="inputEmail4" className="form-label">Product Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="productName"                                            
                                            defaultValue={data.productName}
                                            onChange={handleNameChange}                                             
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="inputPassword4" className="form-label">Product Quantity</label>
                                        <input type="number"
                                            className="form-control"
                                            id="ProductQuantity"
                                            defaultValue={data.productQuantity}
                                            onChange={handleQuantityChange}
                                        />

                                    </div>

                                    <div className="col-md-4">

                                        <label htmlFor="inputPassword4" className="form-label">Product Rate</label>
                                        <input type="number"
                                            className="form-control"
                                            id="ProductRate"
                                            defaultValue={data.productRate}
                                            onChange={handleRateChange}
                                        />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Description</label>
                                        <textarea className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                            defaultValue={data.productDescription}
                                            onChange={handleDescriptionChange}
                                        />

                                    </div>


                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                    </div>

                                    <div className="col-12">
                                        <Link to="/ViewProducts" style={{ textDecoration: 'none', color: 'white' }}>
                                            <button type="submit" className="btn btn-primary mt-3">
                                                View all
                                            </button>
                                        </Link>
                                    </div>


                                </form>



                            </div>


                        </div>
                    </div>
                </div>
                :
                <Redirect to="/admin" />
            }
        </Fragment>
    )
}

export default UpdateProduct
