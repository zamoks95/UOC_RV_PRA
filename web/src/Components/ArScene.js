import React from "react";

import { Entity, Scene } from "aframe-react";
import { makeStyles } from "@material-ui/core/styles";

import BasicChairSrc from "../Database/Products/Models/BasicChair.obj";
import BasicChairPat from "../Database/Products/Patterns/pattern-A.patt";
import BasicBedSrc from "../Database/Products/Models/BasicBed.obj";
import BasicBedPat from "../Database/Products/Patterns/pattern-B.patt";
import BasicShelfSrc from "../Database/Products/Models/BasicShelf.obj";
import BasicShelfPat from "../Database/Products/Patterns/pattern-C.patt";
import BasicTableSrc from "../Database/Products/Models/BasicChair.obj";
import BasicTablePat from "../Database/Products/Patterns/pattern-D.patt";
import VintageChairSrc from "../Database/Products/Models/VintageChair.obj";
import VintageChairPat from "../Database/Products/Patterns/pattern-E.patt";
import VintageTableSrc from "../Database/Products/Models/VintageTable.obj";
import VintageTablePat from "../Database/Products/Patterns/pattern-F.patt";
import VintageDecorationSrc from "../Database/Products/Models/VintageDecoration.obj";
import VintageDecorationPat from "../Database/Products/Patterns/pattern-G.patt";

const useStyles = makeStyles({
  FrameContainer: {
    height: "360px",
  },
});

export default function ArScene() {
  const classes = useStyles();
  return (
    <Scene
      className={classes.FrameContainer}
      embedded
      arjs="sourceType: webcam;"
    >
      <Entity className="decorator">
        <a-asset-item id="basicChair" src={BasicChairSrc}></a-asset-item>
        <a-asset-item id="basicBed" src={BasicBedSrc}></a-asset-item>
        <a-asset-item id="basicShelf" src={BasicShelfSrc}></a-asset-item>
        <a-asset-item id="basicTable" src={BasicTableSrc}></a-asset-item>
        <a-asset-item id="vintageChair" src={VintageChairSrc}></a-asset-item>
        <a-asset-item id="vintageTable" src={VintageTableSrc}></a-asset-item>
        <a-asset-item id="vintageDecoration" src={VintageDecorationSrc}></a-asset-item>
      </Entity>
      <a-marker type="pattern" url={BasicChairPat}>
        <a-entity
          obj-model="obj: #basicChair"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={BasicBedPat}>
        <a-entity
          obj-model="obj: #basicChair"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={BasicShelfPat}>
        <a-entity
          obj-model="obj: #basicBed"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={BasicTablePat}>
        <a-entity
          obj-model="obj: #basicShelf"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={VintageChairPat}>
        <a-entity
          obj-model="obj: #vintageChair"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={VintageTablePat}>
        <a-entity
          obj-model="obj: #vintageTable"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
      <a-marker type="pattern" url={VintageDecorationPat}>
        <a-entity
          obj-model="obj: #vintageDecoration"
          material="color: #FFFFFF"
          position="0 0.5 -3"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-marker>
    </Scene>
  );
}
