import React, { useState } from "react";
import house from "../../assets/img/main/House.png";
import upload from "../../assets/img/main/upload.png";

import "./_addannounce.scss";

export default function AddAnnounce() {
  const [checked, setChecked] = useState(false);
 const [value, setValue] = useState('')

//  const formEl = document.getElementById('form')

  return (
    <div className="container">
      <div className="add">
        <div className="add__home">
          <img src={house} alt="" />
          <span>E’lon berish</span>
        </div>

        <form id="form" className="add__block">
          <h2>E’lon berish</h2>

          <div className="add__block__top">
            <h2>Vaqt va yo’nalishni tanlang</h2>

            <div className="date">
              <span>O’tkaziladigan sanani kiriting</span>

              <label>
                <input
                  className="date"
                  type="date"
                  defaultValue="2022-02-22"
                  min="2018-01-01"
                  max="2023-12-31"
                />
                <input
                  className="time"
                  type="time"
                  min="09:00"
                  max="18:00"
                  defaultValue="13:00"
                  required
                />
              </label>
            </div>

            <div className="direction">
              <div className="direction__left">
                <label htmlFor="id_select"> Yo’nalishni belgilang </label>
                <select id="id_select" autoFocus={true}>
                  <option defaultValue="1" disabled selected>
                    Information Technologies{" "}
                  </option>
                  <option defaultValue="it">IT</option>
                  <option defaultValue="dizayn">Dizayn</option>
                  <option defaultValue="biznes">Biznes</option>
                  <option defaultValue="talim">Ta'lim</option>
                </select>
              </div>

              <div className="direction__right">
                <label htmlFor="id_select"> Ichki yo’nalish </label>
                <select id="id_select" autoFocus={true}>
                  <option defaultValue="" disabled selected>
                    Direction{" "}
                  </option>
                  <option defaultValue="web"> Web dasturlash</option>
                  <option defaultValue="mob"> Mobile dasturlash</option>
                  <option defaultValue="ui"> UI/UX dizayn</option>
                  <option defaultValue="design"> Grafik dizayn</option>
                  <option defaultValue="matem">Matematika</option>
                  <option defaultValue="fizika"> Fizika</option>
                  <option defaultValue="menejment"> Menejment</option>
                  <option defaultValue="kredit"> Kredit va audit</option>
                </select>
              </div>
            </div>

            <div className="type">
              <div className="type__left">
                <span>Tadbir turi</span>

                <div className="buttons">
                  <button className="online">Online</button>
                  <button className="offline">Offline</button>
                </div>
              </div>

              <div className="type__right">
                <label htmlFor="id_select"> Link kiriting</label>
                <input
                  type="text"
                  placeholder="https://www.youtube.com/liver24"
                  onClick={(e) => setValue(e.target.value)}

                />
              </div>
            </div>
          </div>

          <h2>Tashkilotchi</h2>

          <div className="add__block__middle">
            <div className="checkbox">
              <label>
                Jismoniy shaxs
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </label>
              <label>
                Ismi sharifi
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                  onClick={(e) => setValue(e.target.value)}
                />
              </label>
            </div>

            <div className="organization">
              <label>
                Yuridik nomi
                <input type="text" placeholder="Najot Ta’lim MCHJ" />
              </label>
              <label>
                Ismi sharifi
                <input type="text" placeholder="Abbos Janizakov" />
              </label>
              <label>
                Professiya
                <input type="text" placeholder="Product designer" />
              </label>
              <label>
                Telefon raqami
                <input type="number" placeholder="+998" />
              </label>
              <label>
                Qo’shimcha tel raqam
                <input type="number" placeholder="+998" />
              </label>
            </div>
          </div>

          <div className="add__block__post">
            <h2>Post</h2>

            <p>Mavzuni sarlavhasi</p>
            <div className="desc">
              <label>
                Description
                <input type="text" placeholder="Description" />
              </label>
            </div>

            <div className="upload">
              <span>Rasm yuklash</span>
              <label className="custom-upload">
                <input name="upload" type="file" />
                <img src={upload} alt="upload" />
                <span className="file-name">Upload img</span>
                <span className="zmdi zmdi-upload"></span>
              </label>

              <p>
                Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
              </p>
            </div>

            <div className="theme">
              <h2>Mavzu matni</h2>

              <input type="text" placeholder="Mavzu matni" />
            </div>

            <div className="btns">
              <button className="cancel">Bekor qilish</button>
              <button type="submit" className="send">E’lonni yuborish</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
