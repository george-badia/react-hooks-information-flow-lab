import React, { useState } from "react";
// Function component for each Item
function Item({ name, category }) {
   // Define state for isInCart using useState hook
  const [isInCart, setIsInCart] = useState(false);
 // Function to handle adding or removing item from cart
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }
 // Return JSX for rendering each item
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
