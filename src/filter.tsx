import { Fragment } from "react";
import styled from "styled-components";
import { DataInterface, ProductInterface } from "./types";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  margin: 0.2rem 0;
`;

export default function Filter({
  data,
  setData
}: {
  data: DataInterface;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}) {
  const brands: string[] = data.products
    .reduce((accumulator, current) => {
      return accumulator.includes(current.brand)
        ? accumulator
        : accumulator.concat(current.brand);
    }, [])
    .sort((a, b) => a.localeCompare(b));

  function handleBrandSelection(e: any) {
    if (!e.target.checked) {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          brand: data.filter.brand.filter(
            (currentBrand) => currentBrand !== e.target.value
          )
        }
      }));
    } else {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          brand: data.filter.brand.concat(e.target.value)
        }
      }));
    }
  }

  function handleSizeSelection(e: any) {
    if (e.target.checked) {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          size: data.filter.size.concat(e.target.value)
        }
      }));
    } else {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          size: data.filter.size.filter(
            (currentSize) => currentSize !== e.target.value
          )
        }
      }));
    }
  }

  function handleGenderSelection(e: any) {
    if (e.target.checked) {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          gender: data.filter.gender.concat(e.target.value)
        }
      }));
    } else {
      setData((data) => ({
        ...data,
        filter: {
          ...data.filter,
          gender: data.filter.gender.filter(
            (currentGender) => currentGender !== e.target.value
          )
        }
      }));
    }
  }

  return (
    <>
      <h3>Filter</h3>
      <FlexColumn>
        <h4>Size</h4>
        <FlexRow>
          <input
            id="size-small"
            type="checkbox"
            value="S"
            onChange={handleSizeSelection}
          />
          <label htmlFor="size-small">Small</label>
        </FlexRow>
        <FlexRow>
          <input
            id="size-medium"
            type="checkbox"
            value="M"
            onChange={handleSizeSelection}
          />
          <label htmlFor="size-medium">Medium</label>
        </FlexRow>
        <FlexRow>
          <input
            id="size-large"
            type="checkbox"
            value="L"
            onChange={handleSizeSelection}
          />
          <label htmlFor="size-large">Large</label>
        </FlexRow>
        <FlexRow>
          <input
            id="size-xlarge"
            type="checkbox"
            value="XL"
            onChange={handleSizeSelection}
          />
          <label htmlFor="size-xlarge">X Large</label>
        </FlexRow>
      </FlexColumn>

      <FlexColumn>
        <h4>Brand</h4>
        {brands.map((brand) => {
          return (
            <FlexRow key={brand}>
              <input
                id={`brand-${brand}`}
                type="checkbox"
                value={brand}
                onChange={handleBrandSelection}
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </FlexRow>
          );
        })}
      </FlexColumn>

      <FlexColumn>
        <h4>Ideal for</h4>
        <FlexRow>
          <input
            id="gender-m"
            type="checkbox"
            value="M"
            onChange={handleGenderSelection}
          />
          <label htmlFor="gender-m">Men</label>
        </FlexRow>
        <FlexRow>
          <input
            id="gender-f"
            type="checkbox"
            value="F"
            onChange={handleGenderSelection}
          />
          <label htmlFor="gender-f">Women</label>
        </FlexRow>
      </FlexColumn>
    </>
  );
}
