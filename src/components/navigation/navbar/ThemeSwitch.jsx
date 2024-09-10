import React from 'react';

const ThemeSwitch = ({ isChecked, toggleTheme }) => {
  return (
    <label className="ui-switch">
      <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
