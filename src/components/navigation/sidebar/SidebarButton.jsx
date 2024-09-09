import { useEffect } from "react";

const SidebarButton = ({
  sidebarVisible = true,
  sidebarButtonConfig,
  isSubMenuVisible = true,
  setSubMenuVisible = () => {},
  showMenuIfClosed = () => {},
}) => {
  const handleDropdownToggle = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  useEffect(() => {
    if (!sidebarVisible && isSubMenuVisible) {
      setSubMenuVisible(false);
    }
  }, [sidebarVisible, isSubMenuVisible]);

  return sidebarButtonConfig.submenuItems ? (
    <li>
      <div className="dropdown">
        <button
          className={`dropdown-btn ${isSubMenuVisible ? "rotate-180" : ""}`}
          onClick={() => {
            handleDropdownToggle();
            showMenuIfClosed();
          }}
        >
          {sidebarButtonConfig.svgIcon}

          <span>{sidebarButtonConfig.buttonTitle}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>

        <div className="submenu">
          <ul className={`sub-menu ${isSubMenuVisible ? "show" : ""}`}>
            <div>
              {sidebarButtonConfig.submenuItems.map((item, index) => (
                <li key={index} onClick={() => {window.location.href = item.href}}>
                  {item.svgIcon && item.svgIcon}
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </li>
  ) : (
    <li>
      <a href={sidebarButtonConfig.href}>
        {sidebarButtonConfig.svgIcon}
        <span>{sidebarButtonConfig.buttonTitle}</span>
      </a>
    </li>
  );
};

export default SidebarButton;
