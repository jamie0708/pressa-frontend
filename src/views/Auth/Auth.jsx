import React from "react";
import logo from "../../assets/img/main/logo-blue.png";
import account from "../../assets/img/login/account.png";
import password from "../../assets/img/login/lock.png";

import "./_auth.scss";

export default function Auth() {
  return (
    <div className="login">
      <img src={logo} alt="logo-pressa" />

      <div className="login__block">
        <h2>Tizimga kirish</h2>

        <form>
          <input type="text" placeholder="Login" />
          <img className="account" src={account} alt="account" />

          <input type="password" placeholder="Parol" />

          <img className="password" src={password} alt="lock" />

          <p>
            <a href="home">Parolni unutdingizmi?</a>
          </p>

          <button>Kirish</button>
        </form>
      </div>
    </div>
  );
}
