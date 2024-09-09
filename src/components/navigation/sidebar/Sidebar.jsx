import React, { useState } from "react";
import "@/assets/styles/navigation/sidebar/Sidebar.css";
import SidebarButton from "./SidebarButton";
import { sidebarButtonsConfig } from './SidebarItems.jsx'; // Adjust the path as needed


const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [visibleDropdown, setVisibleDropdown] = useState(null);


  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleDropdownToggle = (dropdownId) => {
    if (visibleDropdown === dropdownId) {
      setVisibleDropdown(null); // Close the currently open dropdown
    } else {
      setVisibleDropdown(dropdownId); // Open the selected dropdown and close others
    }
  };

  return (
    <aside id="sidebar" className={`${sidebarVisible ? "" : "close"}`}>
      <ul>
        <li>
          <span className="logo">coding2go</span>
          <button id="toggle-btn" onClick={handleToggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
            </svg>
          </button>
        </li>

        {sidebarButtonsConfig.map((config) => (
          <SidebarButton
            key={config.id}
            sidebarVisible={sidebarVisible}
            sidebarButtonConfig={config}
            isSubMenuVisible={visibleDropdown === config.id}
            setSubMenuVisible={() => handleDropdownToggle(config.id)}
            showMenuIfClosed={() => {
              if (!sidebarVisible) {
                setSidebarVisible(true);
              }
            }}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
