import React from "react";
import Icons from "./icons.js";

export default function Content(props) {
  let today = new Date();

  return (
    <div className="contentContainer">
      <div className="content">
        <div className="author">
          <div id="test">
            <div className="avatar">
              <img
                id={props.locator}
                src={props.avatar}
                alt="Author avatar"
                width="35px"
                height="35px"
              ></img>
            </div>
            <div className="authorName">
              <p>Kathryn Hodgson</p>
            </div>
          </div>
        </div>
        <p>{props.paragraph}</p>
        <Icons locator={props.locator} />
        <p className="content-date">
          {today.getDate()}/{today.getFullYear()}/{today.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
