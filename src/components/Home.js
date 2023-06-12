import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="65892613"
            title="The Lean Startup: How constant innovation creates radically successful businesses paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61wzXuHCb1L._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49145094"
            title="Lindt LINDOR Milk Chocolate Candy Truffles, Milk Chocolate with Smooth, Melting Truffle Center, 25.4 oz., 60 Count"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81b+tsTcSRL._SX425_.jpg"
          />
          <Product
            id="49538123"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={51.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61q3U0RXeGL._AC_SX425_.jpg"
          />
          <Product
            id="41234994"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX342_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538994"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={209.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71E-QQ41VtL._AC_SY450_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
