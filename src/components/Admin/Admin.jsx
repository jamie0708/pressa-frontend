import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/main/logo.png";
import home from "../../assets/img/admin/home.png";
import presentation from "../../assets/img/admin/presentation.png";
import trash from "../../assets/img/admin/trash.png";
import cog from "../../assets/img/admin/cog.png";
import search from "../../assets/img/admin/search.png";
import notif from "../../assets/img/admin/notif.png";
import userImage from "../../assets/img/admin/user-image.png";
import back from "../../assets/img/admin/arrow-circle-left.png";

import "./_admin.scss";
import Notifications from "../Notifications/Notifications";
export default function Admin() {

  const [checked, setChecked] = useState(false);
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>

        <ul className="menu">
          <li className="menu__list">
            <NavLink to="/">
              <img src={home} alt="home" />
              <span>Bosh sahifa</span>
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="presentation">
              <img src={presentation} alt="presentation" />
              <span>Statistika</span>
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="trash">
              <img src={trash} alt="trash" />
              <span>O’chirilganlar</span>
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="cog">
              <img src={cog} alt="cog" />
              <span>Sozlamalar</span>
            </NavLink>
          </li>

          <li className="menu__list">
            <NavLink to="login">
              <img src={back} alt="back" />
              <span>Chiqish</span>
            </NavLink>
          </li>
        </ul>

        <p>2022 All Rights</p>
      </div>

      <div className="admin__block">
        <div className="admin__block__top">
          <div className="search">
            <img src={search} alt="search" />
            <input type="text" placeholder="search" />
          </div>

          <div className="user">
            <img className="notif" src={notif} alt="notif" />

            <div className="user__block">
              <img src={userImage} alt="user" />

              <div className="user__name">
                <span>Abbos Janizakov</span>
                <p>id:12432</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admin__block__filter">
          <div className="buttons">
            <button>Kutilmoqda</button>
            <button>Qabul qiligan</button>
            <button>Rad etilgan</button>
          </div>

          <div className="checkbox">
            <label>
              Oxirgilari
              <input 
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
            </label>

            <label>
            Eng so’ngilari
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
            </label>
          </div>
        </div>


        <Notifications />
      </div>
    </div>
  );
}
