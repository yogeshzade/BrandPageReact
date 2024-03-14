import React from "react";

const Navigation = () => {
  return (
    <nav className="container nav">
    <input type="checkbox" id="nav-check"></input>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="logo">
        <img src="images/brand_logo.png" alt="brand logo" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
