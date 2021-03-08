import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import democard from '../../images/Product/demo_product.jpg'
import '../css/Products/Product.css';



const cartHandler = (array) => {

    const isLoggedIn = sessionStorage.getItem('LoggedIn');

    if (isLoggedIn) {
        console.log(array);
        const user_id = window.sessionStorage.getItem("user_id");
        const product_quantity = 1;
        const cartItems = {
            product_id: array._id,
            product_brand: array.productBrand,
            product_name: array.productName,
            product_quantity: product_quantity,
            product_price: array.productRate
        }

        Axios.post('https://node-application5thsem.herokuapp.com/api/addtocart/' + user_id, cartItems)
            .then(res => {
                alert(res.data.message);
                console.log(res);
            })
            .catch(err => {
                console.log('error', err);
            })
    } else {
        window.location.href = "/login"
    }
}






function Product() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    },[data]);

    const getData = async () => {
        const product_name = sessionStorage.getItem('product_Name');

        const res = await Axios.get('https://node-application5thsem.herokuapp.com/api/get-products/' + product_name)
        console.log(res.data);

        if (res.data.status) {
            setData(res.data.product);
        }

    }
    console.log(data.length)






    return (
        <Fragment>
            <Header />

            <div className="productCards">
                <h1>Products</h1>
                <div className="container">
                    <div className="row">
                        {/* <div class="card-deck"> */}
                            {data.length > 0 ? data.map(e => (


                                <div className="col-md-4">

                                    <div className="card mb-4">


                                        <img src={democard} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.productBrand}</h5>
                                            <h6 className="card-title text-capitalize">{e.productName}</h6>
                                            <p className="card-text">{e.productDescription}</p>
                                            <p className="card-text text-primary">&#x20b9;{e.productRate}</p>

                                            <Link to="#" onClick={() => cartHandler(e)}> <small>Add to cart
                                       <i className="fa fa-cart-plus"></i>
                                            </small></Link>

                                        </div>


                                    </div>

                                </div>
                            )) :
                                <div className="mx-auto">Product Out Of Stock !!</div>
                            }

                            
                        {/* </div> */}
                    </div>
                </div>

            </div>

            <Footer />
        </Fragment>
    )
}

export default Product
