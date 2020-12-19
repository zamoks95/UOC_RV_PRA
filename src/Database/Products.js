import BasicChair_Metal from "./Products/Textures/BasicChair-Metal.JPG";
import BasicChair_Wood from "./Products/Textures/BasicChair-Wood.JPG";
import BasicChair_Rubber from "./Products/Textures/BasicChair-Rubber.JPG";
import BasicBed_Metal from "./Products/Textures/BasicBed-Metal.JPG";
import BasicBed_Wood from "./Products/Textures/BasicBed-Wood.JPG";
import BasicBed_Rubber from "./Products/Textures/BasicBed-Rubber.JPG";

import BasicShelf_Metal from "./Products/Textures/BasicShelf-Metal.JPG";
import BasicShelf_Wood from "./Products/Textures/BasicShelf-Wood.JPG";
import BasicShelf_Rubber from "./Products/Textures/BasicShelf-Rubber.JPG";

import BasicTable_Metal from "./Products/Textures/BasicTable-Metal.JPG";
import BasicTable_Wood from "./Products/Textures/BasicTable-Wood.JPG";
import BasicTable_Rubber from "./Products/Textures/BasicTable-Rubber.JPG";

import VintageTable_Metal from "./Products/Textures/VintageTable-Metal.JPG";
import VintageTable_Wood from "./Products/Textures/VintageTable-Wood.JPG";
import VintageTable_Rubber from "./Products/Textures/VintageTable-Rubber.JPG";

import VintageChair_Metal from "./Products/Textures/VintageChair-Metal.JPG";
import VintageChair_Wood from "./Products/Textures/VintageChair-Wood.JPG";
import VintageChair_Rubber from "./Products/Textures/VintageChair-Rubber.JPG";

import VintageDecoration_Metal from "./Products/Textures/VintageDecoration-Metal.JPG";
import VintageDecoration_Wood from "./Products/Textures/VintageDecoration-Wood.JPG";
import VintageDecoration_Rubber from "./Products/Textures/VintageDecoration-Rubber.JPG";

export function ArrayProducts({ totalItems }) {
  let newArrayProducts = [];
  // Push Default Product
  newArrayProducts.push({
    ProductName: "Default",
    ProductDescription: "Default",
    ProductImg: "Default",
    ProductVrColor: "Default",
    ProductVrMaterial: "Default",
    ProductId: 0,
  });

  const arrayMaterials = ["Metal", "Wood", "Rubber"];
  // Basic Chairs
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Basic Chair - " + arrayMaterials[i],
      ProductDescription: "This is a basic chair made of any material",
      ProductImg:
        "BasicChair_" + arrayMaterials[i] === "BasicChair_Metal"
          ? BasicChair_Metal
          : "BasicChair_" + arrayMaterials[i] === "BasicChair_Rubber"
          ? BasicChair_Rubber
          : BasicChair_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 1,
    });
  }

  // Basic Beds
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Basic Bed - " + arrayMaterials[i],
      ProductDescription: "This is a basic Bed made of any material",
      ProductImg:
        "BasicBed_" + arrayMaterials[i] === "BasicBed_Metal"
          ? BasicBed_Metal
          : "BasicBed_" + arrayMaterials[i] === "BasicBed_Rubber"
          ? BasicBed_Rubber
          : BasicBed_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 2,
    });
  }

  // Basic Shelfs
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Basic Shelf - " + arrayMaterials[i],
      ProductDescription: "This is a basic Shelf made of any material",
      ProductImg:
        "BasicShelf_" + arrayMaterials[i] === "BasicShelf_Metal"
          ? BasicShelf_Metal
          : "BasicShelf_" + arrayMaterials[i] === "BasicShelf_Rubber"
          ? BasicShelf_Rubber
          : BasicShelf_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 3,
    });
  }

  // Basic Table
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Basic Table - " + arrayMaterials[i],
      ProductDescription: "This is a basic Table made of any material",
      ProductImg:
        "BasicTable_" + arrayMaterials[i] === "BasicTable_Metal"
          ? BasicTable_Metal
          : "BasicTable_" + arrayMaterials[i] === "BasicTable_Rubber"
          ? BasicTable_Rubber
          : BasicTable_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 4,
    });
  }

  // Vintage Chair
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Vintage Chair - " + arrayMaterials[i],
      ProductDescription: "This is a Vintage Chair made of any material",
      ProductImg:
        "VintageChair_" + arrayMaterials[i] === "VintageChair_Metal"
          ? VintageChair_Metal
          : "VintageChair_" + arrayMaterials[i] === "VintageChair_Rubber"
          ? VintageChair_Rubber
          : VintageChair_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 5,
    });
  }

  // Vintage Table
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Vintage Table - " + arrayMaterials[i],
      ProductDescription: "This is a Vintage Table made of any material",
      ProductImg:
        "VintageTable_" + arrayMaterials[i] === "VintageTable_Metal"
          ? VintageTable_Metal
          : "VintageTable_" + arrayMaterials[i] === "VintageTable_Rubber"
          ? VintageTable_Rubber
          : VintageTable_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 6,
    });
  }

  // Vintage Decoration
  for (let i = 0; i < arrayMaterials.length; i++) {
    newArrayProducts.push({
      ProductName: "Vintage Decoration - " + arrayMaterials[i],
      ProductDescription: "This is a Vintage Decoration made of any material",
      ProductImg:
        "VintageDecoration_" + arrayMaterials[i] === "VintageDecoration_Metal"
          ? VintageDecoration_Metal
          : "VintageDecoration_" + arrayMaterials[i] === "VintageDecoration_Rubber"
          ? VintageDecoration_Rubber
          : VintageDecoration_Wood,
      ProductVrColor: arrayMaterials[i] === "Rubber" ? true : false,
      ProductVrMaterial: arrayMaterials[i],
      ProductId: 7,
    });
  }

  return newArrayProducts;
}
