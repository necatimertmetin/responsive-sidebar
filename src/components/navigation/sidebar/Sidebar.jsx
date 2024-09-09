import React, { useState } from "react";
import "@/assets/styles/navigation/sidebar/Sidebar.css";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const sidebarButtonsConfig = [
    {
      id: "button2",
      buttonTitle: "Siparislerim",
      href: "#test",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
        </svg>
      ),
    },
    {
      id: "dropdown1",
      buttonTitle: "Envanter Yonetimi",
      submenuItems: [
        {
          href: "#folder",
          title: "Envanterim",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" />
            </svg>
          ),
        },
        {
          href: "#document",
          title: "Yeni Urun Ekle",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          ),
        },
        {
          href: "#project",
          title: "Toplu Urun Sil",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m576-80-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104L576-80ZM120-320v-80h280v80H120Zm0-160v-80h440v80H120Zm0-160v-80h440v80H120Z" />
            </svg>
          ),
        },
        {
          href: "#project",
          title: "Sorunlu Urunler",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-800 243-663l237 137 237-137-237-137ZM120-321v-318q0-22 10.5-40t29.5-29l280-161q10-5 19.5-8t20.5-3q11 0 21 3t19 8l280 161q19 11 29.5 29t10.5 40v159h-80v-116L479-434 200-596v274l240 139v92L160-252q-19-11-29.5-29T120-321ZM720-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0ZM480-491Z" />
            </svg>
          ),
        },
        {
          href: "#project",
          title: "Envanter Guncelleme Gecmisi",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
            </svg>
          ),
        },
        {
          href: "#project",
          title: "Asin Bazli Ayarlar",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-280h80l12-60q12-5 22.5-10.5T576-364l58 18 40-68-46-40q2-14 2-26t-2-26l46-40-40-68-58 18q-11-8-21.5-13.5T532-620l-12-60h-80l-12 60q-12 5-22.5 10.5T384-596l-58-18-40 68 46 40q-2 14-2 26t2 26l-46 40 40 68 58-18q11 8 21.5 13.5T428-340l12 60Zm40-120q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
          ),
        },
        {
          href: "#project",
          title: "Tekrarli Urunler",
          svgIcon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
            </svg>
          ),
        },
      ],
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" />
        </svg>
      ),
    },
    {
      id: "dropdown2",
      buttonTitle: "Test",
      submenuItems: [
        { href: "#folder", title: "tes" },
        { href: "#document", title: "test" },
        { href: "#project", title: "testt" },
      ],
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm40 240v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
        </svg>
      ),
    },
  ];

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
