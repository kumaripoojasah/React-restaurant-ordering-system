
import React from "react";

function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="price">
        ₹ {product.price}
      </p>

      <div className="buttons">

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          
        </button>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(product)}
        >
          -
        </button>

      </div>

    </div>
  );
}

export default ProductCard;