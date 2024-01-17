import React from "react";
import "./boostbox.css";
import bgBoostMobile from "../assets/bg-boost-mobile.svg";
import GetStartedBtn from "./GetStartedBtn";

const BoostBox = () => {
  return (
    <div
      id="boostbox"
      className="boost-box"
      style={{
        backgroundImage: `url(${bgBoostMobile})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "100%",
      }}
    >
      <p className="text-white-bold mb-3">Boost your links today</p>
      <GetStartedBtn />
    </div>
  );
};

export default BoostBox;
