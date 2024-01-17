import React, { useState } from "react";
import GetStartedBtn from "./GetStartedBtn";

import ShortenBox from "./ShortenBox";
import Content3 from "./Content3";
import BoostBox from "./BoostBox";

const MainContent = () => {
  const [urllist, setUrllist] = useState([]);

  const handleSubmit = (longurl) => {
    console.log(longurl);
    // console.log(
    //   JSON.stringify({
    //     url: longurl,
    //   })
    // );
    const apiUrl = "https://cleanuri.com/api/v1/shorten";
    fetch(apiUrl, {
      method: "POST",
      //   mode: "no-cors",
      mode: "cors",
      //   body: JSON.stringify(longurl),
      body: JSON.stringify({
        url: longurl,
      }),
    })
      .then((response) => {
        console.log({ response });
        // response.json();
      })
      .then((data) => {
        console.log(data);
        // var newUrl = {
        //   longurl: longurl,
        //   shorturl: data.result_url,
        // };
        // setUrllist([...urllist, newUrl]);
      });
  };

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
      <ShortenBox onUrlSubmit={handleSubmit} />
      <br />
      <br />
      <br />
      {urllist.map((url) => {
        <div>
          <span>{url.longurl}</span>
          <span>{url.shorturl}</span>
        </div>;
      })}
      <Content3 />
      <BoostBox />
    </div>
  );
};

export default MainContent;
