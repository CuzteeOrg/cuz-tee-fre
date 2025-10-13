import React from "react";
import { Link } from "react-router-dom";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: "1px solid gray", margin: 8, padding: 8, width: 200 }}>
      <img src={product.imageUrl} alt={product.name} width={180} height={180} />
      <h3>{product.name}</h3>
      <p>₹{product.basePrice}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
