import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import brands from '@fortawesome/fontawesome-free-brands'
import "./social.css";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <div id="contacts">
     {/* <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a> */}
<a href="https://github.com/Mohamed-Ayaan358" className="twitter social">
  {/* <FontAwesomeIcon icon={<FontAwesomeIcon icon="fab fa-github" />} size="2x" /> */}
  <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
</a>
<a href="https://www.linkedin.com/in/mohamed-ayaan-1750311b8/"
  className="instagram social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
</div>
  );
}