import React from "react";
import "./_announces.scss";
import Box from "../Box/Box";

export default function Announces() {

  return (
    <div className="announces">
      <div className="container announces__main">
        <h2>Oxirgi e’lonlar</h2>

        <div className="box">
          <Box />
        </div>

        <button>Ko’proq ko’rish</button>
      </div>
    </div>
  );
}
