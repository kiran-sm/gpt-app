import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

const Brand = () => {
  return (
    <div className="gpt__brand section__padding">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Google" />
      </div>
      <div>
        <img src={atlassian} alt="Google" />
      </div>
      <div>
        <img src={dropbox} alt="Google" />
      </div>
      <div>
        <img src={shopify} alt="Google" />
      </div>
    </div>
  );
};

export default Brand;
