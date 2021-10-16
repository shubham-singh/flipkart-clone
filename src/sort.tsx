import styled from "styled-components";
import { DataInterface } from "./types";

export default function Sort({
  setData
}: {
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}) {
  function handleSort(e: any) {
    setData((data) => ({
      ...data,
      sort: e.target.value
    }));
  }
  return (
    <div>
      <h2>Sort</h2>
      <input
        id="sort-lth"
        type="radio"
        name="sort"
        value={"LOW_TO_HIGH"}
        onChange={handleSort}
      />
      <label htmlFor="sort-lth">Price: Low to high</label>
      <input
        id="sort-htl"
        type="radio"
        name="sort"
        value={"HIGH_TO_LOW"}
        onChange={handleSort}
      />
      <label htmlFor="sort-htl">Price: High to low</label>
      <input
        id="sort-reset"
        type="radio"
        name="sort"
        value={"NULL"}
        onChange={handleSort}
      />
      <label htmlFor="sort-reset">Reset</label>
    </div>
  );
}
