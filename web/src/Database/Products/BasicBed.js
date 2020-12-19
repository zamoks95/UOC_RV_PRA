import React from "react";
import { Entity, Scene } from "aframe-react";
import { makeStyles } from "@material-ui/core/styles";
import "aframe-environment-component";
import BasicBedSrc from "./Models/BasicBed.obj";

const useStyles = makeStyles({
  FrameContainer: {
    height: "360px",
  },
});

export default function BasicBed({ material, color }) {
  const classes = useStyles();

  return (
    <Scene className={classes.FrameContainer} embedded>
      <Entity environment="preset: checkerboard;" />
      <Entity className="decorator">
        <a-asset-item
          id="BasicBed"
          src={BasicBedSrc}
        ></a-asset-item>
      </Entity>
      <a-entity
        obj-model="obj: #BasicBed"
        material={
          color
            ? "color: " + color
            : "color: " + (material === "Wood" ? "#cb843a" : "#a6a6a6")
        }
        position="0 0.5 -3"
        scale="0.5 0.5 0.5"
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear;"
      ></a-entity>

      <Entity light={{ type: "point" }} />
    </Scene>
  );
}
