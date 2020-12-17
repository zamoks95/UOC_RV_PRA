export function ArrayProducts({ totalItems }) {
  let newArrayProducts = [];
  // Push Default Product
  newArrayProducts.push({
    ProductName: "Default",
    ProductDescription: "Default",
    ProductImg: "Default",
  });
  // Dev Only tmp - Start
  for (let i = 0; i < totalItems; i++) {
    newArrayProducts.push({
      ProductName: "Product " + i,
      ProductDescription: "Product Description " + i,
      ProductImg: "https://source.unsplash.com/1600x900/?space",
    });
  }
  // Dev Only tmp - End

  return newArrayProducts;
}
