// import { Grid } from "@material-ui/core";
import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import productConstants from "../../assets/productConstants";
import { Grid } from "@material-ui/core";
import home_background from "../../assets/images/home_background.png";
import home_amazon_banner from "../../assets/images/home_amazon_banner.png";

function Home() {
  const getProductInfo = (productObj, key) => {
    return (
      <Grid item id="home__row" xs={12} sm={8} md={4} lg={3} key={key}>
        <Product {...productObj} />
      </Grid>
    );
  };

  return (
    <div className="home">
      <div>
        <img className="home__image" src={home_background} alt="" />
        <img className="amazon__image" src={home_amazon_banner} alt="" />
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          {productConstants.map((productObj, i) =>
            getProductInfo(productObj, i)
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
