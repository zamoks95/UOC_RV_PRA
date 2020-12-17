import React from "react";
import { Entity, Scene } from "aframe-react";
import { makeStyles } from "@material-ui/core/styles";
import "aframe-environment-component";
import VintageChairSrc from "./Models/VintageChair.obj";

const useStyles = makeStyles((theme) => ({
  FrameContainer: {
    background: "grey",
    height: "360px",
  },
}));

export default function VintageChair() {
  const classes = useStyles();
  return (
    <Scene className={classes.FrameContainer} embedded>
      <Entity environment="preset: checkerboard;" />
      <Entity className="decorator">
        <a-asset-item
          id="VintageChair"
          src={VintageChairSrc}
          position="0 2.25 -10"
          scale="1.75 1.75 1.75"
        ></a-asset-item>
      </Entity>

      <a-entity
        obj-model="obj: #VintageChair"
        material="color: #00FF00;"
        position="0 0.5 -3"
        scale="0.5 0.5 0.5"
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear;"
      ></a-entity>

      <Entity light={{ type: "point" }} />
    </Scene>
  );
}
