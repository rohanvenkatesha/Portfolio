"use client";
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa"; // Importing sun icon from react-icons

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("red");
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  // Set the theme when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    // Calculate navbar height dynamically
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }
  }, []);

  // Change the theme when the button is clicked
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setDropdownVisible(false); // Hide dropdown after selecting a theme
  };

  // Function to generate the gradient color for the button based on the selected theme
  const getButtonGradient = (selectedTheme: string) => {
    switch (selectedTheme) {
      case "red":
        return "linear-gradient(to right, red, yellow)"; // Red to Yellow gradient
      case "green":
        return "linear-gradient(to right, #0f9e4b,  #14dbe2)"; // Green to Lime gradient
      case "blue":
        return "linear-gradient(to right, #6a0dad, #00bcd4)"; // Purple to Cyan gradient
      default:
        return "linear-gradient(to right, red, yellow)"; // Default to Red to Yellow gradient
    }
  };

  return (
    <div className="theme-switcher-container">
      <button
        className="theme-switcher-button"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
        style={{
          background: getButtonGradient(theme), // Apply the gradient to the button
        }}
      >
        <FaSun size={24} color="white" /> {/* Sun icon in white color */}
      </button>
      {isDropdownVisible && (
        <div className={`theme-dropdown ${isDropdownVisible ? "show" : ""}`}>
          <div
            className="color-option red-theme"
            onClick={() => toggleTheme("red")}
          ></div>
          <div
            className="color-option green-theme"
            onClick={() => toggleTheme("green")}
          ></div>
          <div
            className="color-option blue-theme"
            onClick={() => toggleTheme("blue")}
          ></div>
        </div>
      )}
    </div>
  );
}
