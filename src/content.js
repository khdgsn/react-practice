import React from 'react';
import Icons from './icons.js';
import image from './IMG_0806.PNG';


export default function Content() {
    let today = new Date();

    return (
        <div className="contentContainer">
            <div className="content">
                <div className="author">
                    <div id="test">
                    <div className="avatar">
                        <img src={image} alt="Author avatar" width="35px" height="35px">
                        </img>
                    </div>
                <div className="authorName">
                    <p>
                    Kathryn Hodgson
                    </p>
                </div>
                    </div>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid
                </p>
                <Icons />
                <p className="content-date">
                    {today.getDate()}/{today.getFullYear()}/{today.toLocaleTimeString()}
                </p>
            </div>
      </div>
    );
  }
