import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/main/logo.png";
import search from "../../assets/img/main/search.png";
import plus from "../../assets/img/main/plus.png";
import "./_header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__top container">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>

        <div className="header__search">
          <img src={search} alt="search" />
          <input type="text" placeholder="Izlash" />
        </div>

        <ul className="menu">
          <li className="menu__list">
            <NavLink to="/about">
              <span>Biz haqimizda</span>
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/discuss">
              <span>Savol va javoblar</span>
            </NavLink>
          </li>
        </ul>

        <NavLink to="/addannounce">
          <button>
            <img src={plus} alt="plus" />
            <p>E’lon berish</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
