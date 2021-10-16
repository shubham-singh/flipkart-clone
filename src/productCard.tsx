import styled from "styled-components";
import { ProductInterface } from "./types";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 250px;
  margin: 0 0.5rem 0.5rem 0.5rem;
  background-color: white;
`;

const Img = styled.img`
  height: 350px;
  width: 250px;
  object-fit: contain;
`;

const ProductDescription = styled.div`
  margin: 0.4rem;
  padding: 0 1rem;
  align-self: flex-start;
`;

const Brand = styled.h5`
  margin: 0;
  color: gray;
`;

const ProductName = styled.p`
  margin: 0.2rem 0;
  width: 200px;
  align-self: flex-start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ProductPrice = styled.div`
  display: flex;
  margin-top: 0.5rem;
  width: 100%;
`;

const Price = styled.p`
  margin: 0;
  margin-right: 1rem;
  display: inline-block;
  font-weight: bold;
`;

const MRP = styled.s`
  color: gray;
`;

const Sizes = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

const Size = styled.span`
  padding: 0 0.5rem;
`;

export default function ProductCard({
  product
}: {
  product: ProductInterface;
}) {
  return (
    <StyledDiv>
      <Img src={product.img.default} alt="clothes" />
      <ProductDescription>
        <Brand>{product.brand}</Brand>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          <Price>&#8377;{product.price}</Price>
          <MRP>&#8377;{product.mrp}</MRP>
        </ProductPrice>
        <Sizes>
          <span>Size </span>
          {product.size.map((currentSize) => (
            <Size key={currentSize}> {currentSize} </Size>
          ))}
        </Sizes>
      </ProductDescription>
    </StyledDiv>
  );
}
