import "./App.css";
import Container from "@material-ui/core/Container";

import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          Catalog
        </Typography>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>
          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>
          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>

          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>

          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>

          <Grid item>
            <ProductCard
              ProductName="Product 1"
              ProductDescription="Product 1 Description"
              ProductImg="https://source.unsplash.com/user/erondu/1600x900"
            />
          </Grid>

          
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
