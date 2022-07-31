import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/main/logo.png";
import call from "../../assets/img/main/call.png";
import facebook from "../../assets/img/brands/facebook.png";
import instagram from "../../assets/img/brands/instagram.png";
import telegram from "../../assets/img/brands/telegram.png";

import "./_footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__main container">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>

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

        <div className="footer__call">
          <img src={call} alt="" call />

          <span>+71 200-11-02</span>
        </div>

        <div className="footer__social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  );
}
