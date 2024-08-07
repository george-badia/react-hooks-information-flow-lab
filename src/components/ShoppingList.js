import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
// Function component for ShoppingList
function ShoppingList({ items }) {
  // Define state for selectedCategory using useState hook
  const [selectedCategory, setSelectedCategory] = useState("All");
 // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
 // Filter items based on selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  // Return JSX for rendering the ShoppingList component
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;