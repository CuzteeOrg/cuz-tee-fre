import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import Customizer from "../components/Customizer";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      getProduct(parseInt(id)).then(p => setProduct(p));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} width={300} />
      <p>{product.description}</p>
      <p>Base Price: ₹{product.basePrice}</p>
      <Customizer product={product} />
    </div>
  );
}
