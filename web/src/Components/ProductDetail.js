import React, { useState, useEffect } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RoomIcon from "@material-ui/icons/Room";
import BusinessIcon from "@material-ui/icons/Business";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import "aframe";
import { CirclePicker } from "react-color";

import BasicChair from "../Database/Products/BasicChair";
import BasicBed from "../Database/Products/BasicBed";
import BasicShelf from "../Database/Products/BasicShelf";
import BasicTable from "../Database/Products/BasicTable";
import VintageChair from "../Database/Products/VintageChair";
import VintageTable from "../Database/Products/VintageTable";
import VintageDecoration from "../Database/Products/VintageDecoration";

export default function ProductDetail({
  ProductName,
  ProductDescription,
  ProductImg,
  ProductVrColor,
  ProductVrMaterial,
  ProductId,
}) {
  const [productColor, setProductColor] = useState(ProductVrColor);
  useEffect(() => {
    if (productColor) {
      setProductColor("#00FF00");
    }
  }, []);

  return (
    <div className="ProductDetail">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item sm={12}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={ProductImg}
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item sm={7}>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {ProductName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ProductDescription}
          </Typography>
        </Grid>
        <Grid item sm={5} align="center">
          <Typography component="p">
            <AttachMoneyIcon /> 6.5€
          </Typography>
          <Typography component="p">
            <RoomIcon /> 6.5€
          </Typography>
          <Typography component="p">
            <BusinessIcon /> 6.5€
          </Typography>
          <Typography component="p">
            <ThumbUpIcon /> 6.5€
          </Typography>
          <Typography component="p">
            <ThumbDownAltIcon /> 6.5€
          </Typography>
        </Grid>
        {productColor && (
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="top"
            >
              <Grid item xs={4}>
                <Typography component="p">Sel·lecciona un color</Typography>
              </Grid>
              <Grid item xs={4}>
                <CirclePicker
                  triangle="hide"
                  width={"100%"}
                  colors={["#FF0000", "#00FF00", "#0000FF", "#000000"]}
                  onChange={(e) => {
                    setProductColor(e.hex);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      {ProductId === 1 && (
        <BasicChair material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 2 && (
        <BasicBed material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 3 && (
        <BasicShelf material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 4 && (
        <BasicTable material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 5 && (
        <VintageChair material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 6 && (
        <VintageTable material={ProductVrMaterial} color={productColor} />
      )}
      {ProductId === 7 && (
        <VintageDecoration material={ProductVrMaterial} color={productColor} />
      )}
    </div>
  );
}
