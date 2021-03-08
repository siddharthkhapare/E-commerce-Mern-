import React from 'react';

import Introduction from './Introduction';
// import CardSlider from './CardSlider';
import MidSection from './MidSection';
import Footer from './Footer';
import Header from './Header';
import ShopByBrand from './ShopByBrand';

function Home() {
  return (
    <div>

      <Header />
      {/* <CardSlider /> */}
      <Introduction />
      <MidSection />
      <ShopByBrand />
      <Footer />


    </div>

  );

}

export default Home;
