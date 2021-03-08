import React, { Fragment } from 'react'
import '../css/Aboutus/Aboutus.css'
import Header from '../Header';
import Footer from '../Footer';
import eye from '../../images/Aboutus/eye.png';
import target from '../../images/Aboutus/target.png';
import frame1 from '../../images/Aboutus/frame1.png';

function Aboutus() {
    return (
        <Fragment>
            <Header />

            <div className="aboutusParallax">
                <h1>About us</h1>
                <div className="color-overlay"></div>
            </div>

            <section class="aboutus">

                <div class="container">
                    <div class="row" id="row1">

                        <div class="col-12 col-md-5 ">
                            <img class="img-fluid" src={frame1} alt="" />
                        </div>

                        <div class="text col-12 col-md-7">
                            <h3 class="text-capitalize">Welcome to company</h3>
                            <p class="text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor mi quis molestie
                                ullamcorper. Nullam nec laoreet nisi, non ultricies enim. Donec ut libero vel ex condimentum
                                scelerisque ac in nunc. Aenean vehicula sapien ut risus mollis efficitur. Fusce a finibus ex.
                                Fusce enim ex, tempus ullamcorper augue sit amet, vestibulum maximus nulla. Suspendisse id
                                tortor pellentesque, iaculis ipsum et, sodales nisl. Ut mi nibh, blandit at pharetra a, sodales
                                non mi. Nunc vitae lorem in est tincidunt eleifend. In purus odio, varius vel feugiat at,
                                pretium id tortor.
                    </p>
                        </div>

                    </div>
                </div>

                <div class="row" id="row2">

                    <div class="col-12 col-md-2 ">
                        <img id="img1" class="img-fluid pl-lg-5" src={eye} alt="" />
                    </div>

                    <div class="vision col-12 col-md-4">
                        <h3 class="text-capitalize">our vision</h3>
                        <p class="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor mi quis molestie
                            ullamcorper. Nullam nec laoreet nisi, non ultricies enim. Donec ut libero vel ex condimentum
                            scelerisque ac in nunc.
                </p>

                    </div>



                    <div class="col-12 col-md-2 ">
                        <img id="img2" class="img-fluid pl-lg-5" src={target} alt="" />
                    </div>

                    <div class="mission col-12 col-md-4">
                        <h3 class="text-capitalize">our mission</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor mi quis molestie
                            ullamcorper. Nullam nec laoreet nisi, non ultricies enim. Donec ut libero vel ex condimentum
                            scelerisque ac in nunc.
                </p>
                    </div>

                </div>


            </section>
            <Footer />
        </Fragment >
    )
}

export default Aboutus
