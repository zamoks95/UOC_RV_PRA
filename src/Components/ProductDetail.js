import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RoomIcon from "@material-ui/icons/Room";
import BusinessIcon from "@material-ui/icons/Business";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { makeStyles } from "@material-ui/core/styles";

import "aframe";
import { Entity, Scene } from "aframe-react";

const useStyles = makeStyles((theme) => ({
  FrameContainer: {
    background: "grey",
    height: "360px",
  },
}));

export default function ProductDetail({
  ProductName,
  ProductDescription,
  ProductImg,
}) {
  const classes = useStyles();

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
      </Grid>
      <Scene className={classes.FrameContainer} embedded>
        {/* Scene Goes Here - Start */}
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity light={{ type: "point" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
        {/* Scene Goes Here - End */}
      </Scene>
    </div>
  );
}
