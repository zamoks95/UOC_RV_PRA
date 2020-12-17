import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";

const useStyles =  makeStyles((theme) => ({
  root: {
    maxWidth: 345, 
    margin: theme.spacing(2),
  },
}));

export default function ProductCard({
  ProductName,
  ProductDescription,
  ProductImg,
  ProductActivate
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => {ProductActivate()}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= {ProductImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
          {ProductName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ProductDescription}
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
