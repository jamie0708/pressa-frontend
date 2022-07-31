import React from "react";
import calendar from "../../assets/img/main/calendar.png";
import view from "../../assets/img/main/view-grid.png";
import status from "../../assets/img/main/status-online.png";
import user from "../../assets/img/main/user-circle.png";

import "./_filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__main container">
        <h2>Eng so’ngi master klasslar va tadbirlar bizning saytda</h2>
        <div className="filter__select">
          <div className="calendar">
            <img src={calendar} alt="calendar" />
            <select>
              <option value="">22-02-2022</option>
            </select>
          </div>

          <div className="view">
            <img src={view} alt="view" />
            <select>
              <option value="">Bo’lim tanlang</option>
              <option value="">Bo’lim tanlangfdfdfdfdfdfdfdfdfd</option>
            </select>
          </div>

          <div className="status">
            <img src={status} alt="" />
            <select>
              <option value="">Online / Offline</option>
            </select>
          </div>

          <div className="user">
            <img src={user} alt="" />
            <select>
              <option value="">Ism familya</option>
            </select>
          </div>

          <button>Izlash</button>
        </div>
      </div>
    </div>
  );
}
