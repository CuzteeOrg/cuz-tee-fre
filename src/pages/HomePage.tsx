import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(p => setProducts(p));
  }, []);

  return (
    <div>
      <h1>Dress Store</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {products.map(prod => ( */}
          <ProductCard  />
        {/* ))} */}
      </div>
    </div>
  );
}
