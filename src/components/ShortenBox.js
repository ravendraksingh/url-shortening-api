import React, { useState } from "react";
import "./shortenbox.css";
import bgShortenMobile from "../assets/bg-shorten-mobile.svg";

const ShortenBox = () => {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("");
  //   console.log("longurl=>", longurl);
  const handleUrlChange = (event) => {
    const value = event.target.value.trim();
    if (value !== null && value.length > 0) {
      setLongurl(value);
    }
  };

  const handleClick = () => {
    const apiUrl = "https://cleanuri.com/api/v1/shorten";
    fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(longurl),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShorturl(data.result_url);
      });
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
