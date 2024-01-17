import React, { useState } from "react";
import "./shortenbox.css";
import bgShortenMobile from "../assets/bg-shorten-mobile.svg";

const ShortenBox = ({ onUrlSubmit }) => {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("dsfadsfasdf");
  //   console.log("longurl=>", longurl);
  const handleUrlChange = (event) => {
    const value = event.target.value.trim();
    if (value !== null && value.length > 0) {
      setLongurl(value);
    }
  };

  const handleClick = () => {
    onUrlSubmit(longurl);
  };

  return (
    <div
      id="shortenbox"
      className="shorten-box rounded"
      style={{
        backgroundImage: `url(${bgShortenMobile})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100px -30px",
        backgroundSize: "contain",
        width: "inherit",
      }}
    >
      <input
        id="shortInput"
        type="text"
        className="short-input rounded"
        placeholder="Shorten a link here..."
        onChange={handleUrlChange}
      />
      <button className="btn shortit-btn" onClick={handleClick}>
        Shorten It!
      </button>
    </div>
  );
};

export default ShortenBox;
