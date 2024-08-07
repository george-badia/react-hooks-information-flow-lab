
import React from 'react';
// Function component for the Header
const Header = ({ onDarkModeClick, isDarkMode }) => {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;