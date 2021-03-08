import React, { Fragment } from 'react'
import './css/MidSection.css';

import melamyne from '../images/Product/melamyne/melamyne.webp';
import { Link } from 'react-router-dom';



function CardSlider() {
    return (
        <Fragment>

            <div className="cardSlider">

                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="news-slider" className="owl-carousel">

                                <div className="col-md-4">
                                    <Link to="/"><img src={melamyne} alt="" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default CardSlider
