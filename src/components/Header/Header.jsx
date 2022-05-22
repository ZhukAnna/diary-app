import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">Dashboard</h1>
      <div className="header__menu">
        <div className="user-pic">A</div>
      </div>
    </div>
  );
};

export default Header;
