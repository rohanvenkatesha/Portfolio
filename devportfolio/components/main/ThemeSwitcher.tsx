"use client";
import { useState, useEffect, useRef } from "react";
import { FaSun } from "react-icons/fa"; // Importing sun icon from react-icons
import { IoIosColorWand } from "react-icons/io";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("blue");
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the theme switcher button

  // Set the theme when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Close dropdown when clicking outside of the dropdown or button
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(e.target as Node)
      ) {
        setDropdownVisible(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
        return "linear-gradient(to right ,rgba(247, 116, 8, 0.884),  rgb(153, 11, 248))"; // Red to Yellow gradient
      case "green":
        return "linear-gradient(to right, #0f9e4b,  #14dbe2)"; // Green to Lime gradient
      case "blue":
        return "linear-gradient(to right, #6a0dad, #00bcd4)"; // Purple to Cyan gradient
      default:
        return "linear-gradient(to right, #6a0dad, #00bcd4)"; // Default to Purple to Cyan gradient
    }
  };

  return (
    <div className="theme-switcher-container">
      <button
        ref={buttonRef} // Attach the ref to the button
        className="theme-switcher-button"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
        style={{
          background: getButtonGradient(theme), // Apply the gradient to the button
        }}
      >
        <IoIosColorWand size={24} color="white" /> {/* Sun icon in white color */}
      </button>
      {isDropdownVisible && (
        <div
          ref={dropdownRef} // Attach the ref to the dropdown
          className={`theme-dropdown ${isDropdownVisible ? "show" : ""}`}
        >
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
