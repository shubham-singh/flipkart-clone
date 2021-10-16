import { DataInterface, ProductInterface } from "./types";

export async function loadJSON(
  setData: React.Dispatch<React.SetStateAction<DataInterface>>
) {
  const response = await fetch("data.json");
  const data = await response.json();
  setData((previousData) => ({
    ...previousData,
    products: data
  }));
}

export function sortData(
  sort: DataInterface["sort"],
  products: ProductInterface[]
) {
  if (sort === "NULL") {
    return products;
  } else if (sort === "LOW_TO_HIGH") {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    return sortedProducts;
  } else {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    return sortedProducts;
  }
}

export function filterData(
  filter: DataInterface["filter"],
  products: ProductInterface[]
) {
  let result = [...products];
  for (const key of Object.keys(filter)) {
    for (const currentFilter of filter[key]) {
      for (const product of products) {
        if (!product[key].includes(currentFilter)) {
          result = result.filter(
            (currentProduct) => currentProduct !== product
          );
        }
      }
    }
  }
  return result;
}
