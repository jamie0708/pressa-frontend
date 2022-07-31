import React from "react";
import "./notifications.scss";

export default function Notifications() {
  let data = [
    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },

    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },

    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },

    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },

    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },

    {
      title: "Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida",
      username: "Abbos Janizakov",
      number: "+998 90 123-45-67",
      date: "30/01/2022",
      time: "15:00",
      profession: "UI/UX dizayner",
    },
  ];
  return (
    <div className="notifications">
      <h2>Eng so’ngi xabarnomalar</h2>

      {data.map((user) => {
        return (
          <div className="notifications__box">
            <div className="notifications__box__top">
              <p>{user.title}</p>

                <button className="delete">Bekor qilish</button>
                <button className="add">Tasdiqlash</button>
            </div>
            <div className="notifications__box__bottom">
              <p>{user.username}</p>

              <span>{user.number}</span>
              <span>{user.date}</span>
              <span>{user.time}</span>
              <span>{user.profession}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
