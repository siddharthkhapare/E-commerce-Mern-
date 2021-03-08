import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import Footer from '../Footer';
import Header from '../Header';
import '../css/ShoppingCart/ShoppingCart.css';
import { Redirect } from 'react-router';

function CheckOut() {

    const [subTot, setSubTot] = useState('');
    const subTotal = [];
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {

        const user_id = window.sessionStorage.getItem("user_id");

        Axios.get('https://node-application5thsem.herokuapp.com/api/getcartdata/' + user_id)
            .then(res => {
                // console.log(res.data.data[0].price);
                res.data.data.total = 0;
                for (let i = 0; i < res.data.data.length; i++) {
                    res.data.data[i].subtotal = res.data.data[i].price * res.data.data[i].quantity;
                    res.data.data.total = res.data.data[i].subtotal + res.data.data.total;
                    console.log(res.data.data[i].subtotal + res.data.data.total);
                }
                console.log(res.data)
                setData(res.data.data);

            })
            .catch(err => {
                console.log('error in get req : ', err);
            })

    }



    return (
        <Fragment>
            <Header />

            {sessionStorage.getItem('LoggedIn') ?

                <div className="CheckOut">
                    <div className="container pt-5">
                       
                    </div>
                </div>
                :
                <Redirect to="/login" />
            }

            <Footer />
        </Fragment >
    )
}

export default CheckOut
