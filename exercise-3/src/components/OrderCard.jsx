import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange  }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div onClick={quantity > 0 ? () => onQuantityChange(product, -1) : undefined} className="order-button" 
            style={{ backgroundColor: quantity === 0 ? '#bfbfbf' : '' }}>-</div>
        <h4>{quantity}</h4>
        <div onClick={()=>onQuantityChange(product, 1)} className="order-button">+</div>
      </div>
    </div>
  );
}
