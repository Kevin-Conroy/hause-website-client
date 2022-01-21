import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div classname="social-container" className="text-center">
      <h3 className="text-center">Follow Along</h3>
      <a
        href="https://www.youtube.com/c/DAVEHAUSEOFFICIAL"
        className="youtube social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/DaveHauseMusic"
        className="facebook social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/hausedave" 
      className="twitter social"
      target="_blank"
      >
        
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/davehause"
        className="instagram social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;
