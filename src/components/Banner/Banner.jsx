import React from "react";
import person from "../../assets/img/main/person.png";
import person2 from "../../assets/img/main/person2.png";
import background from "../../assets/img/main/background.png";
import background2 from "../../assets/img/main/background2.png";

import "./_banner.scss";

export default function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner__left">
          <h2>E’LONLARINGIZNI BIZNI SAYTDA BERING</h2>
          <img className="background" src={background} alt="background" />
          <img className="person" src={person} alt="person" />
        </div>

        <div className="banner__right">
          <h2>ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h2>
          <img className="background" src={background2} alt="background2" />
          <img className="person" src={person2} alt="person2" />
        </div>
      </div>
    </div>
  );
}
