import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
}));

export default function ProductCard({
  ProductName,
  ProductDescription,
  ProductImg,
  ProductVrColor,
  ProductActivate,
}) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      onClick={() => {
        ProductActivate();
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={ProductImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {ProductName}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {ProductDescription}
          </Typography>
          {ProductVrColor && (
            <Typography
              variant="body2"
              color="textSecondary"
              component="strong"
            >
              Varis Colors
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
