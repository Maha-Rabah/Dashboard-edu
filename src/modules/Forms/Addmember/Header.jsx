import React from 'react';
import '../Addmember/Addmembers.css'
import Logo from  './../assets/logo_edu.png'
import layers from './../assets/layers.png'
import right from    './../assets/chevron-right.png'


function Header() {
  return (
    <header className="header">
      <img
        loading="lazy"
        src={Logo}
        alt="Company Logo"
        className="logo"
      />
      <nav className="navItems">
        <img
          loading="lazy"
          src={layers}
          alt=""
          className="navIcon"
        />
        <span className="dashboard">DASHBOARD</span>
        <img
          loading="lazy"
          src={right}
          alt=""
          className="navIcon"
        />
      </nav>
    </header>
  );
}

export default Header;