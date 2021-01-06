import { Grid } from "@material-ui/core";
import React from "react";
import Product from "../Product/Product";
import "./Home.css";
// import productConstants from "../../assets/productConstants";

function Home() {
  // const getProductInfo = (productObj) => {
  //   const { title, price, imageUrl, rating } = productObj;
  //   return <Product {...productObj} />;
  // };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.imgur.com/KrBHjyK.png"
          alt="background"
        />
        <div className="home__row">
          <Product
            title="LEATHERMAN, Skeletool Lightweight Multitool"
            price={64.95}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="LEATHERMAN, Skeletool Lightweight Multitool"
            price={64.95}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="LEATHERMAN, Skeletool Lightweight Multitool"
            price={64.95}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            title="LEATHERMAN, Skeletool Lightweight Multitool"
            price={64.95}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            title="LEATHERMAN, Skeletool Lightweight Multitool"
            price={64.95}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

/*         <Grid container spacing={3}>
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="home__row">
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
          <Grid item sm={4}>
            <Product
              title="LEATHERMAN, Skeletool Lightweight Multitool"
              price={64.95}
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/61H7Pq7BWEL._AC_SL1500_.jpg"
              rating={5}
            />
          </Grid>
        </Grid> */

export default Home;
