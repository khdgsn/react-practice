import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">

        <div className="social-container">
            <h3>Social Follow</h3>
            <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>

            <a href="https://www.facebook.com/learnbuildteach/" target="_blank"  rel="noreferrer"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a href="https://twitter.com/?lang=en" target="_blank"  rel="noreferrer"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    </div>
  );
}