import React from "react";
import GetStartedBtn from "./GetStartedBtn";

import ShortenBox from "./ShortenBox";
import Content3 from "./Content3";
import BoostBox from "./BoostBox";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="c1">
        <img src="./images/illustration-working.svg" width="100%" />
        <div className="c1text">
          <h1>More than just</h1>
          <h1>shorter links</h1>
          <p>Build your brand's recognition and get detailed</p>
          <p>insights on how your links are performing.</p>
          <br />
          <br />
          <GetStartedBtn />
          <br />
          <br />
          <br />
        </div>
      </div>
      <ShortenBox />
      <br />
      <br />
      <br />
      <Content3 />
      <BoostBox />
    </div>
  );
};

export default MainContent;
