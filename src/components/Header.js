import React from "react";
import { Link, NavLink } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import UserMenu from "../components/UserMenu";

import logo from "../img/logo.svg";

const Header = () => (
  <header>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3">
          <Link to="/" className="branding">
            <img src={logo} alt="Later logo" />
            Later
          </Link>
        </div>
        <div className="col-md-6">
          <SearchForm />
        </div>
        <div className="col-md-3">
          <UserMenu />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
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
