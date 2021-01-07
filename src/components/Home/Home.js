// import { Grid } from "@material-ui/core";
import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import productConstants from "../../assets/productConstants";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  product: {
    width: "80%",
  },
  image: {
    padding: "0",
  },
});

function Home() {
  const classes = useStyles();
  const getProductInfo = (productObj) => {
    return (
      <Grid item id="home__row" xs={12} sm={8} md={4} lg={3}>
        <Product {...productObj} />
      </Grid>
    );
  };

  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="https://i.imgur.com/KrBHjyK.png"
          alt="background"
        />
        <img
          className="amazon__image"
          src="https://edited.com/wp-content/uploads/2019/12/AMAZON-1200x537.png"
          alt=""
        />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          {productConstants.map((productObj) => getProductInfo(productObj))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
