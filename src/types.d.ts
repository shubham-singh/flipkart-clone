export interface ProductInterface {
  id: number;
  brand: string;
  name: string;
  size: ["S", "M", "L", "XL"];
  gender: ["M", "F"];
  price: number;
  mrp: number;
  img: {
    default: string;
  };
}

export interface DataInterface {
  products: ProductInterface[];
  sort: "LOW_TO_HIGH" | "HIGH_TO_LOW" | "NULL";
  filter: {
    size: string[];
    gender: string[];
    brand: string[];
  };
  loading: boolean;
}
