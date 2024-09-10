import React, { useEffect, useState } from "react";
import "@/assets/styles/navigation/navbar/Navbar.css";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent click from closing the dropdown
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [theme]);

  const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Kiwi"];

  return (
    <nav className="navbar">
      <div className="navbar-part navbar-left">
        <div className="navbar-logo-container">DROPSHIP</div>
      </div>
      <div className="navbar-part navbar-middle">
        <SearchBar items={items} />
      </div>
      <div className="navbar-part navbar-right">
        <div className="navbar-location-container">
          <div className="navbar-location-button">🍁Canada</div>
          <div className="navbar-location-dropdown">
            <div className="navbar-location">🍁Canada</div>
            <div className="navbar-location">USA</div>
          </div>
        </div>
        <div className="navbar-notificaton-container">🔔</div>
        <div className="navbar-preferences-container">
          <div className="navbar-preferences-container-button">Settings</div>
          <div className="navbar-preferences-container-dropdown">
            <div className="navbar-preferences-language-container">
              <div className="language-switch">
                <div
                  className={`language-switch-button ${
                    language === "tr-TR" ? "active" : ""
                  }`}
                  onClick={() => setLanguage("tr-TR")}
                >
                  Türkçe
                </div>
                <div
                  className={`language-switch-button ${
                    language === "en-US" ? "active" : ""
                  }`}
                  onClick={() => setLanguage("en-US")}
                >
                  English
                </div>
              </div>
              <div className="navbar-preferences-theme-container">
                <ThemeSwitch
                  isChecked={theme === "dark"}
                  toggleTheme={toggleTheme}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-user-container">
          <div className="navbar-user-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <span className="navbar-user-name"> Mert Metin</span>
          </div>
          <div className="navbar-user-dropdown"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
