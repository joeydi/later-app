import React from "react";
import { Link, NavLink } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import UserMenu from "../components/UserMenu";

import logo from "../img/logo.svg";

const Header = () => (
  <header>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-md-3 order-md-1">
          <Link to="/" className="branding">
            <img src={logo} alt="Later logo" />
            Later
          </Link>
        </div>
        <div className="col-6 col-md-2 col-lg-3 order-md-3">
          <UserMenu />
        </div>
        <div className="col-md-7 col-lg-6 order-md-2">
          <SearchForm />
        </div>
        <div className="col-6 offset-md-3 order-md-4">
          <ul>
            <li>
              <NavLink exact to="/">
                Unread
              </NavLink>
            </li>
            <li>
              <NavLink to="/starred">Starred</NavLink>
            </li>
            <li>
              <NavLink to="/archive">Archive</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
