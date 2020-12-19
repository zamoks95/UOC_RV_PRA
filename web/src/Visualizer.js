import "./App.css";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PatternCard from "./Components/PatternCard";
import Navbar from "./Components/Navbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Pattern_A from "./Database/Products/Patterns/pattern-A.png";
import Pattern_B from "./Database/Products/Patterns/pattern-B.png";
import Pattern_C from "./Database/Products/Patterns/pattern-C.png";
import Pattern_D from "./Database/Products/Patterns/pattern-D.png";
import Pattern_E from "./Database/Products/Patterns/pattern-E.png";
import Pattern_F from "./Database/Products/Patterns/pattern-F.png";
import Pattern_G from "./Database/Products/Patterns/pattern-G.png";

import ArScene from "./Components/ArScene";

const Visualizer = () => {
  const [isVisibleAr, setIsVisibleAr] = useState(false);
  return (
    <div className="App">
      <Navbar activePath="Visualitzador" />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1"
          align="left">
          Visualitzador
        </Typography>
        <Typography gutterBottom variant="body1" component="p" align="left">
          Imprimeix o utilitza un dispositiu mòbil per mostrar un dels següents
          patterns. Tot seguit, clica a "Obrir Càmera"
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item xs={12} md={4}>
            {!isVisibleAr && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  setIsVisibleAr(true);
                }}
              >
                Obrir Càmera
              </Button>
            )}
            {isVisibleAr && <ArScene />}
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <PatternCard ProductName="Basic Chair" PatternUrl={Pattern_A} />
              <PatternCard ProductName="Basic Bed" PatternUrl={Pattern_B} />
              <PatternCard ProductName="Basic Shelf" PatternUrl={Pattern_C} />
              <PatternCard ProductName="Basic Table" PatternUrl={Pattern_D} />
              <PatternCard ProductName="Vintage Table" PatternUrl={Pattern_E} />
              <PatternCard ProductName="Vintage Chair" PatternUrl={Pattern_F} />
              <PatternCard
                ProductName="Vintage Decoration"
                PatternUrl={Pattern_G}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Visualizer;
