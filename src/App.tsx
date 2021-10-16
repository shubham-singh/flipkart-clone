import { useEffect, useState } from "react";
import "./styles.css";
import { filterData, loadJSON, sortData } from "./function";
import ProductList from "./productList";
import Sidebar from "./sidebar";
import { DataInterface } from "./types";

export default function App() {
  const [data, setData] = useState<DataInterface>({
    products: [],
    sort: "NULL",
    filter: {
      size: [],
      brand: [],
      gender: []
    },
    loading: true
  });
  let sortedProducts, filteredProducts;

  if (Object.keys(data).length !== 0) {
    sortedProducts = sortData(data.sort, data.products);
    filteredProducts = filterData(data.filter, sortedProducts);
  }

  useEffect(() => {
    loadJSON(setData);
  }, []);
  if (data.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App flex">
      <Sidebar setData={setData} data={data} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
