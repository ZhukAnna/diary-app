import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">Dashboard</h1>
        <div className="header__menu">
          <div className="user-pic">A</div>
        </div>
      </div>
    );
  }
}
