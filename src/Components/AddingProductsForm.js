import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Dashboard/Dashboard.css';

const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/admin'
}



const AddingProductsForm = () => {


    const [ProductType, setProductType] = useState('WoodPaint');
    function handleTypeChange(e) {
        setProductType(e.target.value);

    };


    const [productBrand, setproductBrand] = useState('Asian');
    function handleBrandChange(e) {
        setproductBrand(e.target.value);

    };

    const [productMeasurement, setProductMeasurement] = useState('Liter');
    function handleMeasurementChange(e) {
        setProductMeasurement(e.target.value);

    };

    const [productName, setProductName] = useState('');
    function handleNameChange(e) {
        setProductName(e.target.value);
    }

    const [productQuantity, setProductQuantity] = useState('');
    function handleQuantityChange(e) {
        setProductQuantity(e.target.value);
    }

    const [productRate, setproductRate] = useState('');
    function handleRateChange(e) {
        setproductRate(e.target.value);
    }

    const [productDescription, setproductDescription] = useState('');
    function handleDescriptionChange(e) {
        setproductDescription(e.target.value);
    }



    const submitHandler = (e) => {
        

        const formValues = {
            productType: ProductType,
            productBrand: productBrand,
            productMeasurement: productMeasurement,
            productName: productName,
            productQuantity: productQuantity,
            productRate: productRate,
            productDescription: productDescription
        }
        console.log(formValues);

        axios.post('http://localhost:9000/addproduct', formValues)
            .then(res => {
                console.log('status 200', res);
            })
            .catch(err => {
                console.log('axios catch error:', err)
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

                        <h3 className="mt-5 text-center">Insert Products</h3>
                        <div className="container">
                            <div className="row">

                                <form className="row g-3" onSubmit={submitHandler}>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="ProductType">Product Type</label>

                                        <select className="form-control"
                                            onChange={handleTypeChange}
                                            value={ProductType}>

                                            <option value="WoodPaint">WoodPaint</option>
                                            <option value="Color">Color</option>
                                            <option value="Paper">Paper</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="productBrand">Product Brand</label>

                                        <select id="inputState"
                                            className="form-control"
                                            onChange={handleBrandChange}
                                            value={productBrand}>

                                            <option >Asian</option>
                                            <option>Taralac</option>
                                            <option>Esdee</option>
                                            <option>Emporio</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Product Measurement</label>
                                        <select id="inputState"
                                            className="form-control"
                                            onChange={handleMeasurementChange}
                                            value={productMeasurement}>

                                            <option selected>Liter</option>
                                            <option>Mili Liter</option>
                                            <option>Kilogram</option>
                                            <option>Gram</option>
                                        </select>
                                    </div>




                                    <div className="col-md-4">
                                        <label htmlFor="inputEmail4" className="form-label">Product Name</label>
                                        <input type="text"
                                            className="form-control text-lowercase"
                                            id="inputEmail4"
                                            onChange={handleNameChange} value={productName} />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="inputPassword4" className="form-label">Product Quantity</label>
                                        <input type="number"
                                            className="form-control"
                                            id="inputPassword4"
                                            onChange={handleQuantityChange} value={productQuantity} />

                                    </div>

                                    <div className="col-md-4">

                                        <label htmlFor="inputPassword4" className="form-label">Product Rate</label>
                                        <input type="number"
                                            className="form-control"
                                            id="inputPassword4"
                                            onChange={handleRateChange} value={productRate} />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Description</label>
                                        <textarea className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                            onChange={handleDescriptionChange}
                                            value={productDescription} />

                                    </div>



                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                    </div>

                                    <div className="col-12">
                                    <Link to="/ViewProducts" style={{ textDecoration: 'none', color: 'white' }}>  <button type="submit" className="btn btn-primary mt-3">
                                            View all
                                        </button></Link>
                                    </div>


                                </form>



                            </div>


                        </div>
                    </div>
                </div>
                :
                <Redirect to="/admin" />
            }
        </Fragment >
    );
}

export default AddingProductsForm