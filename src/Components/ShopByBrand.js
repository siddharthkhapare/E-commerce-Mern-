import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import asianpaints from '../images/Brands/asianpaints.png';
import esdee from '../images/Brands/esdee.jpg';
import taralac from '../images/Brands/taralac.png';
import './css/MidSection.css';

function ShopByBrand() {

    const brandHandler = (Asian) => {
        const brandName = Asian;
        sessionStorage.setItem('brand_Name', brandName);
        // console.log(brandName);
    }


    return (
        <Fragment>
            <div className="ShopByBrand mb-5 mt-5">
                <div className="container">


                    <h1 className="text-center text-capitalize mb-4 mb-md-5 " data-aos="zoom-in-down" data-aos-delay="500">Shop by brand</h1>

                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
                            <Link onClick={()=> brandHandler('Asian')} to="/ShopByBrand" style={{ textDecoration: 'none' }}>
                                <div className="card h-100 border-0 shadow-lg ">
                                    <img src={asianpaints} className="card-img-top px-5 pt-5" alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title text-center">Melamyne</h5> */}
                                        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
                            <Link onClick={()=> brandHandler('Taralac')} to="/ShopByBrand" style={{ textDecoration: 'none' }}>
                                <div className="card h-100 border-0 shadow-lg ">
                                    <img src={taralac} className="card-img-top px-5 pt-0" alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title text-center">Melamyne Gold</h5> */}
                                        {/* <p className="card-text">This is a short card.</p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-12 col-md-4 ">
                            <Link onClick={()=> brandHandler('Esdee')} to="/ShopByBrand" style={{ textDecoration: 'none' }}>
                                <div className="card h-100 border-0 shadow-lg">
                                    <img src={esdee} className="card-img-top px-5 pt-5" alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title text-center">Melamyne PreFinish</h5> */}
                                        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default ShopByBrand
