import React from "react";
import bg from "../assets/bg0.gif";

function Hero() {
  return (
    <div className="mx-auto px-3">
      <img
        className="w-full max-h-[500px] rounded-2xl shadow-md shadow-slate-700 "
        src={bg}
        alt=""
      />
    </div>
  );
}

export default Hero;
