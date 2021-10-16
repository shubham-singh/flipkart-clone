import { Fragment } from "react";
import { DataInterface, ProductInterface } from "./types";

export default function Filter({
  data,
  setData
}: {
  data: DataInterface;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}) {
  const brands: string[] = data.products.reduce((accumulator, current) => {
    return accumulator.concat(current.brand);
  }, []);

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
      <div>
        <h1>Size</h1>
        <label htmlFor="size-small">Small</label>
        <input
          id="size-small"
          type="checkbox"
          value="S"
          onChange={handleSizeSelection}
        />
        <label htmlFor="size-medium">Medium</label>
        <input
          id="size-medium"
          type="checkbox"
          value="M"
          onChange={handleSizeSelection}
        />
        <label htmlFor="size-large">Large</label>
        <input
          id="size-large"
          type="checkbox"
          value="L"
          onChange={handleSizeSelection}
        />
        <label htmlFor="size-xlarge">X Large</label>
        <input
          id="size-xlarge"
          type="checkbox"
          value="XL"
          onChange={handleSizeSelection}
        />
      </div>
      <div>
        <h1>Brand</h1>
        {brands.map((brand) => {
          return (
            <Fragment key={brand}>
              <input
                id={`brand-${brand}`}
                type="checkbox"
                value={brand}
                onChange={handleBrandSelection}
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </Fragment>
          );
        })}
      </div>
      <div>
        <h1>Ideal for</h1>
        <label htmlFor="gender-m">Men</label>
        <input
          id="gender-f"
          type="checkbox"
          value="M"
          onChange={handleGenderSelection}
        />
        <label htmlFor="gender-f">Women</label>
        <input
          id="gender-f"
          type="checkbox"
          value="F"
          onChange={handleGenderSelection}
        />
      </div>
    </>
  );
}
