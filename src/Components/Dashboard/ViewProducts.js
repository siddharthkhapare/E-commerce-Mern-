import Axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/Dashboard/Dashboard.css';


const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/admin'
}

const editHandler = (array) => {
    console.log(array._id);
    localStorage.setItem('_id', array._id);
    window.location.href = '/updateProduct';
}

const deleteHandler = (array) => {
    console.log(array._id);

    if (window.confirm('Are you sure to delete product ???')) {
        Axios.delete('http://localhost:9000/api/delete-product/' + array._id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        alert('Product deleted successfully');
        window.location.reload();
    }
    else {
        alert('product is safe in DB')
    }


}

function ViewProducts() {


    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        const res = await Axios.get('https://node-application5thsem.herokuapp.com/fetch-products')
        console.log(res);

        if (res.data.status) {
            setData(res.data.product);

        }
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

                    <div className="viewProduct ">


                        <div className="container">
                            <h3 className="mt-5 text-center">Products List</h3>
                            <div className="row ">

                                <table className="table table-responsive table-striped bg-light">
                                    <thead>
                                        <tr className="text-capitalize">
                                            <th scope="col-1">SrNo</th>
                                            <th scope="col-1">ProductType</th>
                                            <th scope="col-1">productBrand</th>
                                            <th scope="col-1">productMeasurement</th>
                                            <th scope="col-1">productName</th>
                                            <th scope="col-1">productQuantity</th>
                                            <th scope="col-1">productRate</th>
                                            <th scope="col-4">productDescription</th>
                                            <th scope="col-1">action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? data.map((e, index) =>
                                            <tr>
                                                <th className="align-middle" scope="row">{index + 1}</th>
                                                <td >{e.productType}</td>
                                                <td>{e.productBrand}</td>
                                                <td>{e.productMeasurement}</td>
                                                <td>{e.productName}</td>
                                                <td>{e.productQuantity}</td>
                                                <td>{e.productRate}</td>
                                                <td>{e.productDescription}</td>

                                                <td >
                                                    <Link onClick={() => editHandler(e)}><i className="fa fa-edit text-primary"></i></Link>
                                                    <Link onClick={() => deleteHandler(e)}><i className="fa fa-trash ml-1 text-danger"></i></Link>
                                                </td>
                                            </tr>
                                        ) :
                                            <div>Data Not found!</div>
                                        }
                                    </tbody>
                                </table>
                            <div className="col-12">
                                <Link to="/addingproductsform"><button type="submit" className="btn btn-light float-right rounded-0 mb-5">Add More Products</button></Link>
                            </div>
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
export default ViewProducts
