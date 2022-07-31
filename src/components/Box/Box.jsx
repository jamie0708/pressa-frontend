import React from "react";
import user_image from "../../assets/img/main/user-image.png";

import biznes from "../../assets/img/main/presentation-chart-line.png";
import graphic from "../../assets/img/main/color-palette.png";
import designer from "../../assets/img/main/device-mobile.png";
import userImg from "../../assets/img/main/user.png";
import clock from "../../assets/img/main/clock.png";
import calendar from "../../assets/img/main/calendar.png";
import statusOnline from "../../assets/img/main/status-online.png";
import statusOffline from "../../assets/img/main/status-offline.png";
import views from "../../assets/img/main/eye.png";

import "./_box.scss";

export default function Box() {
  const data = [
    {
      user_name: "Alisher Isaev",
      title: "Alisher Isaevdan biznes va IT bo’yicha master klass",
      profession: "Biznesman",
      user_img: user_image,
      date: "17 / 01 / 2022",
      time: "15:00",
      status: "Online",
      views: 2550,
    },
    {
      user_name: "Jahongir G’ulamovdan",
      title: "Jahongir G’ulamovdan dizayn sohasi bo’yicha master klass",
      profession: "Grafik dizayner",
      user_img: user_image,
      date: "17 / 01 / 2022",
      time: "15:00",
      status: "Offline",
      views: 2550,
    },
    {
      user_name: "Sadoqat Kaziyeva",
      title: "Sadoqat Kaziyevadan UI/UX bo’yicha master klass",
      profession: "UI/UX designer",
      user_img: user_image,
      date: "17 / 01 / 2022",
      time: "15:00",
      status: "Offline",
      views: 2550,
    },
    {
      user_name: "Sadoqat Kaziyeva",
      title: "Sadoqat Kaziyevadan UI/UX bo’yicha master klass",
      profession: "UI/UX designer",
      user_img: user_image,
      date: "17 / 01 / 2022",
      time: "15:00",
      status: "Offline",
      views: 2550,
    },

    {
      user_name: "Sadoqat Kaziyeva",
      title: "Sadoqat Kaziyevadan UI/UX bo’yicha master klass",
      profession: "UI/UX designer",
      user_img: user_image,
      date: "17 / 01 / 2022",
      time: "15:00",
      status: "Offline",
      views: 2550,
    },
  ];
  return (
    <>
      {data.map((user) => {
        return (
          <div className="box__main">
            <img
              src={user.user_img}
              className="box__main__afisha"
              alt="user"
            ></img>
            <div className="box__main__bottom">
              <p>{user.title}</p>
              <div className="information">
                <div className="name">
                  <img src={userImg} alt="user-img" />
                  <span>{user.user_name}</span>
                </div>
                <div className="profession">
                  <img
                    src={
                      user.profession === "Biznesman"
                        ? `${biznes}`
                        : user.profession === "Grafik dizayner"
                        ? `${graphic}`
                        : user.profession === "UI/UX designer"
                        ? `${designer}`
                        : ""
                    }
                    alt="profession"
                  />
                  <span>{user.profession}</span>
                </div>
                <div className="calendar">
                  <img src={calendar} alt="calendar" />
                  <span>{user.date}</span>
                </div>
                <div className="time">
                  <img src={clock} alt="clock" />
                  <span>{user.time}</span>
                </div>
                <div className="status">
                  <img
                    src={
                      user.status === "Online"
                        ? `${statusOnline}`
                        : user.status === "Offline"
                        ? `${statusOffline}`
                        : ""
                    }
                    alt="status"
                  />
                  <span>{user.status}</span>
                </div>
                <div className="views">
                  <img src={views} alt="views" />
                  <span>{user.views}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
