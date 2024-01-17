import React from "react";
import "./c3.css";

const Content3 = () => {
  return (
    <div id="c3" className="c3 container">
      <div className="c3p1">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="c3p2">
        <div className="c3box-bg-white c3p2b1 rounded">
          <div className="c3imgbox">
            <img src="./images/icon-brand-recognition.svg" className="c3-img" />
          </div>
          <h1>Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <hr className="hr-line d-none d-lg-inline-flex c3p2b1-hr" />
        <div class="vl d-inline d-lg-none"></div>

        <div className="c3box-bg-white c3p2b2 rounded">
          <div className="c3imgbox">
            <img src="./images/icon-detailed-records.svg" className="c3-img" />
          </div>
          <h1>Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="vl d-inline-flex d-lg-none"></div>
        <hr className="hr-line d-none d-lg-inline-flex" />
        <div className="c3box-bg-white c3p2b3 rounded">
          <div className="c3imgbox">
            <img
              src="./images/icon-fully-customizable.svg"
              className="c3-img"
            />
          </div>
          <h1>Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content3;
