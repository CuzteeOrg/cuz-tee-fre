import React, { useState } from "react";

export default function Customizer({ product }: any) {
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);

  function handleOptionChange(optType: string, optValue: any) {
    //setSelectedOptions(prev => ({ ...prev, [optType]: optValue }));
  }

  function handleAddToCart() {
    console.log("Add to cart:", product.id, selectedOptions, quantity);
    // call API to add to cart
  }

  return (
    <div>
      {product.options?.map((opt: any) => (
        <div key={opt.optionType}>
          <label>{opt.optionType}</label>
          <select
            onChange={e => handleOptionChange(opt.optionType, e.target.value)}
          >
            <option value="">Select {opt.optionType}</option>
            {/* You’d group options by type in a real app */}
            <option value={opt.optionValue}>
              {opt.optionValue} (+₹{opt.additionalCost})
            </option>
          </select>
        </div>
      ))}

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
