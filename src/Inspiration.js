import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Components/Navbar";
import { ArrayProducts } from "./Database/Products";
import ProductCard from "./Components/ProductCard";
import ProductDetail from "./Components/ProductDetail";
import Modal from "react-modal";

let prevActiveProduct = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  FormButton: {
    maxWidth: "150px",
  },
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

function getSteps() {
  return ["Color", "Material", "Estil"];
}

const Inspiration = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  /* Step 1 Form - Start */
  const Step1Form = () => {
    return (
      <div className="form-step">
        <Typography variant="h2" component="h2" className="form-step__title">
          Seleccioneu el vostre color preferit{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                colorClick("Red");
              }}
            >
              {" "}
              Vermell
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                colorClick("Green");
              }}
            >
              {" "}
              Verd
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                colorClick("Blue");
              }}
            >
              Blau
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                colorClick("Black");
              }}
            >
              Negre
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                colorClick("White");
              }}
            >
              Blanc
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };
  /* Step 1 Form - End */
  /* Step 2 Form - Start */
  const Step2Form = () => {
    return (
      <div className="form-step">
        <Typography variant="h2" component="h2" className="form-step__title">
          Seleccioneu el vostre material preferit{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                materialClick("Metal");
              }}
            >
              Metall
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                materialClick("Wood");
              }}
            >
              Fusta
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                materialClick("Rubber");
              }}
            >
              Plàstic
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };
  /* Step 2 Form - End */
  /* Step 3 Form - Start */
  const Step3Form = () => {
    return (
      <div className="form-step">
        <Typography variant="h2" component="h1" className="form-step__title">
          Seleccioneu el vostre estil preferit
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                styleClick("Minimal");
              }}
            >
              Minimalista
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                styleClick("Gothic");
              }}
            >
              Gòtic
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                styleClick("Vintage");
              }}
            >
              Vintage
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };
  /* Step 3 Form - End */

  function getStepContent(step) {
    switch (step) {
      case 0:
        return Step1Form();
      case 1:
        return Step2Form();
      case 2:
        return Step3Form();
      default:
        return "Unknown step";
    }
  }

  const colorClick = (color) => {
    console.log(color);
    handleNext();
  };

  const materialClick = (material) => {
    console.log(material);
    handleNext();
  };

  const styleClick = (style) => {
    console.log(style);
    setFormFinished(true);
  };

  const [formFinished, setFormFinished] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

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
  const product = ArrayProducts({ totalItems: 9 });
  return (
    <div className="App">
      <Navbar activePath="Inspiration" />

      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" className="form-step__title">
          Inspiració
        </Typography>
        {!formFinished && (
          <div className={classes.root}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepButton>{label}</StepButton>
                </Step>
              ))}
            </Stepper>
            <div>{getStepContent(activeStep)}</div>
          </div>
        )}
        {formFinished && (
          <div className={classes.root}>
            <Typography
              variant="h2"
              component="h1"
              className="form-step__title"
            >
              S'han trobat els següents productes{" "}
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
          </div>
        )}
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

export default Inspiration;
