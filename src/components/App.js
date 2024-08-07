import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State to manage the dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle the dark mode button click
  function onDarkModeClick() {
    // Toggle the dark mode state
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark/light mode */}
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      {/* Render the ShoppingList component with item data */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
