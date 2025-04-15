import React from "react";
import logo from "../../assets/images/icons/logo-sm.png";
import Search from "../../assets/images/icons/search-icon-sm.png";
import Cart from "../../assets/images/icons/cart-sm.png";
import { Link } from "react-router";
function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          ></button>
          <Link className="navbar-brand mx-auto" to="/mainPage">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/Mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/iphone">
                  Iphone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/ipad">
                  Ipad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/Watch">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/Tv">
                  Tv
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/Music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/Support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/search">
                  <img src={Search} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link js-scroll-trigger" to="/card">
                  <img src={Cart} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
