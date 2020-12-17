import BasicChair from './Products/BasicChair'
export function ArrayProducts({ totalItems }) {
  let newArrayProducts = [];
  // Push Default Product
  newArrayProducts.push({
    ProductName: "Default",
    ProductDescription: "Default",
    ProductImg: "Default",
    ProductVrComponent: () => { BasicChair()},
  });

  newArrayProducts.push({
    ProductName: "Basic Chair",
    ProductDescription: "This is a basic chair made of any material",
    ProductImg: "Default",
    ProductVrComponent: () => { BasicChair()},
  })
  // Dev Only tmp - Start
  for (let i = 0; i < totalItems; i++) {
    newArrayProducts.push({
      ProductName: "Product " + i,
      ProductDescription: "Product Description " + i,
      ProductImg: "https://source.unsplash.com/1600x900/?space",
      ProductVrComponent: () => { BasicChair()},
    });
  }
  // Dev Only tmp - End

  return newArrayProducts;
}
