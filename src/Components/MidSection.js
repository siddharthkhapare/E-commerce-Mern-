import React from 'react';
import './css/MidSection.css';
import { Link } from 'react-router-dom';
import melamyne from '../images/Product/melamyne/melamyne.webp';
import melamyneGold from '../images/Product/melamyne/melamyneGold.webp';
import melamynePreFinish from '../images/Product/melamyne/melamynePreFinish.webp';

const MidSection = () => {

    const getproduct = (name) => {
        const product = name;
    
        sessionStorage.setItem('product_Name',product);        
    }


    return (

        <div className="midSection">

            <div className="container">


                <h1 className="text-center text-capitalize  mb-4 mb-md-5" data-aos="zoom-in-down" data-aos-delay="500">Wood Paints</h1>



                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
                        <div className="card h-100">
                          <Link onClick={()=> getproduct('melamine')} to="/products" style={{ textDecoration: 'none' }}>
                              <img src={melamyne} className="card-img-top px-5 pt-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Melamyne</h5>
                                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            </div></Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
                        <div className="card h-100">
                        <Link onClick={()=> getproduct('melamine gold')} to="/products" style={{ textDecoration: 'none' }}>
                            <img src={melamyneGold} className="card-img-top px-5 pt-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Melamyne Gold</h5>
                                {/* <p className="card-text">This is a short card.</p> */}
                            </div></Link>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-4 ">
                        <div className="card h-100">
                        <Link onClick={()=> getproduct('melamine prefinish')} to="/products" style={{ textDecoration: 'none' }}>
                            <img src={melamynePreFinish} className="card-img-top px-5 pt-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Melamyne PreFinish</h5>
                                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                            </div></Link>
                        </div>
                    </div>
                
                </div>











                {/* <div className="col-sm col-md-6">
                        <div id="card1" className="card" data-aos="fade-right" data-aos-delay="500">
                            <a href="/"><img src={melamyne} className="img-fluid" alt="..."/></a>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm col-md-6">
                        <div id="card2" className="card" data-aos="fade-down-left" data-aos-delay="500">
                            <a href="/"><img src={asian_PU} className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div id="card3" className="card" data-aos="fade-up-left" data-aos-delay="500">
                            <a href="/"><img src={taralac_sealer} className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div> */}




            </div>
        </div>








    );
}
export default MidSection