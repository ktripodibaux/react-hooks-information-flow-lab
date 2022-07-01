import React from "react";

function Header({isDarkMode, handleDarkModeClick}) {
    return (<>
    <h2>Shopster</h2>
    <button onClick={handleDarkModeClick}> {isDarkMode ? "Dark" : "Light"} Mode </button>
    </>)
  }

  export default Header