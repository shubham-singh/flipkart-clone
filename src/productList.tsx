import styled from "styled-components";
import ProductCard from "./productCard";
import { ProductInterface } from "./types";

const StyledDiv = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 1rem;
`;

export default function ProductList({
  products
}: {
  products: ProductInterface[];
}) {
  return (
    <StyledDiv>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledDiv>
  );
}
