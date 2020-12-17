import { useState } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";

import { ArrayProducts } from "./Database/Products";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import ProductDetail from "./Components/ProductDetail";

const useStyles = makeStyles((theme) => ({
  ProductDetailModal: {
    maxWidth: 640,
    margin: "0 auto",
    background: "#fff",
    padding: theme.spacing(2),
    position: "absolute",
    inset: "40px",
    border: "1px solid rgb(204, 204, 204)",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
  },
}));

let prevActiveProduct = 0;
const Catalog = () => {
  const classes = useStyles();
  const product = ArrayProducts({ totalItems: 9 });
  const [activeProduct, setActiveProduct] = useState(2);

  /* Product Detail Modal - Start */
  const [modalIsOpen, setIsOpen] = useState(false);
  if (activeProduct !== prevActiveProduct) {
    prevActiveProduct = activeProduct;
    setIsOpen(true);
  }
  const closeModal = () => {
    prevActiveProduct = 0;
    setActiveProduct(0);
    setIsOpen(false);
  };
  /* Product Detail Modal - End */
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          Catalog
        </Typography>

        {/* PRODUCTS LIST - START */}
        <section data-id="products_list">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {product.map((item, index) => {
              if (item.ProductName !== "Default") {
                return (
                  <Grid item key={index}>
                    <ProductCard
                      ProductName={item.ProductName}
                      ProductDescription={item.ProductDescription}
                      ProductImg={item.ProductImg}
                      ProductActivate={() => {
                        setActiveProduct(index);
                      }}
                    />
                  </Grid>
                );
              }
              return <Grid item key={index} style={{ display: "none" }} />;
            })}
          </Grid>
        </section>
        {/* PRODUCTS LIST - END */}
      </Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={classes.ProductDetailModal}
      >
        <ProductDetail
          ProductName={product[activeProduct].ProductName}
          ProductDescription={product[activeProduct].ProductDescription}
          ProductImg={product[activeProduct].ProductImg}
        />
      </Modal>
    </div>
  );
};

export default Catalog;
