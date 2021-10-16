import styled from "styled-components";
import { DataInterface } from "./types";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortOption = styled.div`
  display: flex;
  margin: 0.2rem 0;
`;

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
    <StyledDiv>
      <h3>Sort</h3>
      <SortOption>
        <input
          id="sort-lth"
          type="radio"
          name="sort"
          value={"LOW_TO_HIGH"}
          onChange={handleSort}
        />
        <label htmlFor="sort-lth">Price: Low to high</label>
      </SortOption>
      <SortOption>
        <input
          id="sort-htl"
          type="radio"
          name="sort"
          value={"HIGH_TO_LOW"}
          onChange={handleSort}
        />
        <label htmlFor="sort-htl">Price: High to low</label>
      </SortOption>
      <SortOption>
        <input
          id="sort-reset"
          type="radio"
          name="sort"
          value={"NULL"}
          onChange={handleSort}
        />
        <label htmlFor="sort-reset">Reset</label>
      </SortOption>
    </StyledDiv>
  );
}
