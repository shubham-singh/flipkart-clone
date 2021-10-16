import styled from "styled-components";
import ProductCard from "./productCard";
import { ProductInterface } from "./types";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-grow: 1; */
  margin: 1rem 1rem 1rem 0;
`;

const EmptyDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function ProductList({
  products
}: {
  products: ProductInterface[];
}) {
  if (products.length === 0) {
    return (
      <EmptyDiv>
        <h1>No Products</h1>
      </EmptyDiv>
    );
  }
  return (
    <StyledDiv>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledDiv>
  );
}
