import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../css/ShoppingCart/ShoppingCart.css';
import demoproduct from '../../images/Product/demo_product.jpg';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';




function ShoppingCart() {
    const [subTot, setSubTot] = useState('');
    const subTotal = [];
    const[cartId, setCartId] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        
        const user_id = window.sessionStorage.getItem("user_id");

        Axios.get('http://localhost:9000/api/getcartdata/' + user_id)
            .then(res => {
                // console.log(res.data.data[0].price);
                res.data.data.total = 0;
                for (let i = 0; i < res.data.data.length; i++) {
                    res.data.data[i].subtotal = res.data.data[i].price * res.data.data[i].quantity;
                    res.data.data.total = res.data.data[i].subtotal + res.data.data.total;
                    console.log(res.data.data[i].subtotal + res.data.data.total);
                }
                setCartId(res.data.cartId);
                console.log(res.data.cartId);
                setData(res.data.data);

            })
            .catch(err => {
                console.log('error in get req : ', err);
            })

    }


    const deleteHandler = (e) => {
        const user_id = window.sessionStorage.getItem("user_id");
        console.log(e.productId);

        if (window.confirm('Are you sure to delete product from cart ???')) {
            Axios.delete('http://localhost:9000/api/del-prod-from-cart/' + e.productId + '/' + user_id)
                .then(res => {
                    getData();
                    console.log(res);

                })
                .catch(err => {
                    console.log(err);
                })


        }
        else {
            alert('product is safe in cart');
        }

    }



    const quantityHandler = (index, q) => {

        data.total = 0;
        data[index].subtotal = data[index].price * q;
        data[index].quantity = q;
        for (let i = 0; i < data.length; i++) {

            data.total = data[i].subtotal + data.total;
            // console.log(data[i].subtotal + data.total);
        }

        // console.log(subTotal);
        setSubTot(subTotal);

    }


    // const[hide , setHide] = useState(false);
    const hide_or_show = (value) => {


        // const [show, toggleShow] = React.useState(value);
        // ReactDOM.render(
        //     document.getElementById('cart')
        // );
    
        Axios.post('http://localhost:9000/api/checkQuantity',data)
        .then(res=> {
            console.log(res);
            if(res.data.data){
                alert(res.data.data);
            }else{
                // console.log('message not sent');
                if (value == 'hide') {
                    document.getElementById("cart").style.display = 'none';
                    document.getElementById("new").style.display = 'initial';
                } else {
                    document.getElementById("cart").style.display = 'initial';
                    document.getElementById("new").style.display = 'none';
                }
            }
        })
        .catch(err =>{
            console.log(err);
        });

    }
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function checkout (newobj)  {
  
    console.log(newobj);
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    var pricedata = {'price':newobj.total }
    const result = await Axios.post("http://localhost:9000/api/orders" ,pricedata);
    console.log(result);
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_nGJI87V39Ec1k2", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "WoodChemicals",
        description: "Test Transaction",
        image:  'https://static7.depositphotos.com/1181789/752/i/950/depositphotos_7523319-stock-photo-pirate-skull-captain-with-hat.jpg',
        order_id: order_id,
        handler: async function (response) {
            var newdata = [];
            // data.push({

            //     // orderCreationId: order_id,
            //     razorpayPaymentId: response.razorpay_payment_id,
            //     // razorpayOrderId: response.razorpay_order_id,
            //     // razorpaySignature: response.razorpay_signature,

            // });
            newdata.push({product:data},{razorpayPaymentId: response.razorpay_payment_id});
            

             await Axios.post("http://localhost:9000/payment/success", newdata)
            .then (res=>{
                
                console.log(res.data.success);
                
               if(res.data.success){                    
                    alert('your order has been placed....Keep Shoppping !!');
                }
                window.location.href = "/";
              
                if(res.data.success){
                                        
                    Axios.delete('http://localhost:9000/api/delete-cart/' + cartId)
                    .then(res => {                        
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                
                }else{
                    console.log("Problem in success of razor pay api");
                }


            }).catch(err =>{
                console.log("error in sending quantity data and payment id:"+err);
            });
        },
        prefill: {
            name: sessionStorage.getItem('firstname'),
            email: sessionStorage.getItem('email'),
            contact: document.getElementById('inputPhone').value,
        },
        notes: {
            address: document.getElementById('inputAddress').value,
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}




    return (
        <Fragment>

            <Header />
            {sessionStorage.getItem('LoggedIn') ?
                


                    <div className="myCart">
                        <div id="cart">
                        <h3 className="py-5 text-center text-uppercase">Cart Products</h3>

                        <div className="container ">
                            <table  className="table table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th style={{ width: '50%' }}>Product</th>
                                        <th style={{ width: '10%' }}>Price</th>
                                        <th style={{ width: '8%' }}>Quantity</th>
                                        <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                                        <th style={{ width: '10%' }} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? data.map((e, index) => (
                                        <tr>
                                            <td data-th="Product">
                                                <div className="row">

                                                    <div className="col-sm-3  d-sm-inline"><img src={demoproduct} alt="..." className="img-fluid" /></div>
                                                    <div className="col-sm-9">
                                                        <h5 className="m-0 text-capitalize">{e.brand}</h5>
                                                        <h6 className="m-0 text-capitalize">{e.name}</h6>

                                                        {/* <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="p" data-th="Price">&#x20B9;{e.price}</td>
                                            <td data-th="Quantity">
                                                <input type="number" onChange={(e) => quantityHandler(index, e.target.value)}
                                                    className="form-control text-center"
                                                    defaultValue={e.quantity}
                                                    min="1" max="5" />
                                            </td>
                                            <td data-th="Subtotal" className="text-left text-md-center">&#x20B9;{e.subtotal}</td>
                                            <td className="actions">
                                                {/* <button className="btn btn-info btn-sm "><i className="fa fa-refresh" /></button> */}
                                                <button onClick={() => deleteHandler(e)} className="btn btn-danger btn-sm border-0 rounded-0"><i className="fa fa-trash-o" /></button>
                                            </td>
                                        </tr>
                                    )) :
                                        <div>Cart is empty!</div>
                                    }
                                </tbody>
                                <tfoot>
                                    {/* <tr className="visible-xs">
                                <td className="text-center"><strong>Total 1.99</strong></td>
                            </tr> */}
                                    <tr>
                                        <td><Link to="/products" className="btn btn-warning border-0 rounded-0"><i className="fa fa-angle-left" /> Continue Shopping</Link></td>
                                        <td colSpan={2} className="hidden-xs" />
                                        <td className="hidden-xs text-center"><strong>Total &#x20B9;{data.total}</strong></td>
                                        <td> <span onClick={() => hide_or_show('hide')} className=" btn btn-success btn-block border-0 rounded-0">Checkout</span> </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/* <button onClick={() => hide_or_show('hide')}> hide </button> */}
                        
                    </div>
                    <div id="new" style={{ display: 'none' }}>

                        <h3 className="pt-5 text-center text-uppercase">Delivery</h3>
                            <div className="container pt-5">
                                <div className="row card g-3 m-1 shadow">

                                    <div className="row g-3 p-3">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <label htmlFor="FirstName" className="form-label">FirstName</label>                                    

                                            <input type="text" readonly className="form-control-plaintext text-capitalize bg-light" id="FirstName"
                                                value={sessionStorage.getItem('firstname')} disabled />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-6">
                                            <label htmlFor="LastName" className="form-label">LastName</label>
                                            <input type="text" className="form-control-plaintext text-capitalize bg-light" id="LastName"
                                                value={sessionStorage.getItem('lastname')} disabled />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-6">
                                            <label htmlFor="Email" className="form-label">Email</label>
                                            <input type="email" className="form-control-plaintext bg-light" id="Email"
                                                value={sessionStorage.getItem('email')} disabled />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-6">
                                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>


                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Your Address" />
                                            </div>
                                        </div>


                                        <div className="col-md-6 col-sm-6 col-6">
                                            <label htmlFor="inputCity" className="form-label">City</label>
                                            {/* <input type="text" className="form-control" id="inputCity" /> */}
                                            <select className="form-control col-md-12 " aria-label="Default select example">
                                                <option selected hidden>Select City</option>
                                                <option value={1}>Kolhapur</option>
                                                <option value={1}>Pune</option>
                                                <option value={1}>Sangli</option>
                                                <option value={1}>Mumbai</option>

                                            </select>
                                        </div>

                                        <div className="col-md-4 col-sm-4 col-4">
                                            <label htmlFor="inputState" className="form-label d-block">State</label>
                                            <select className="form-control col-md-12 " aria-label="Default select example">
                                                <option selected hidden>Select State</option>
                                                <option value={1}>Maharashtra</option>

                                            </select>

                                        </div>

                                        <div className="col-md-4 col-sm-4 col-4">
                                            <label htmlFor="inputZip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>


                                        <div className="col-9">
                                            <button type="submit" className="btn btn-primary mt-3 rounded-0" onClick={() => checkout(data)}>Proceed</button>
                                        </div>

                                        <div className="mt-4">
                                            <h6>Checkout Price &#x20B9; {data.total} </h6>
                                        </div>
                                    </div>
                                </div>


                                <button className="bg-success float-right text-white border-0" onClick={() => hide_or_show('show')}> <i className="fa fa-angle-left mr-1"></i>
                            Go Back
                            </button>
                            </div>


                        </div>
                </div>

                :
                <Redirect to="/login" />
            }

            <Footer />


        </Fragment>
    )
}


export default ShoppingCart
