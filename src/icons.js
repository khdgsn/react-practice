import React, { useState } from 'react';
import './App.css';
import { AiFillLike } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

export default function Icons(props) {
  // like button & counter

  const [buttonLike, setButtonLike] = useState("rgb(0,0,0)");
  const [likeCounter, setLikeCounter] = useState(0);
  
  const changeLike = () => { 
    if(buttonLike === "rgb(0,0,0)"){
      console.log("here");
      setButtonLike("rgb(34,139,34)")
  } else {
    console.log("false");
    setButtonLike("rgb(0,0,0)");
    }

   setLikeCounter(likeCounter + 1);
  };

  // heart button & counter
  const [buttonHeart, setButtonHeart] = useState("rgb(255,255,255)");
  const [heartCounter, setHeartCounter] = useState(0);

  const changeHeart = () => { 
    if(buttonHeart === "rgb(0,0,0)"){
      console.log("here");
      setButtonHeart("rgb(255,0,0)")
  } else {
    console.log("false");
    setButtonHeart("rgb(0,0,0)");
    }

    setHeartCounter(heartCounter + 1);
  };

  //func to make like button change avatar
  const changeImage = () => {
    let image = document.getElementById(props.locator);
    console.log(image);

    let rabbit = "data:image/jpeg;base64,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";
    let cat = "data:image/jpeg;base64,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";
    
    if (image.src === rabbit) {
      console.log("here");
      image.src = cat} 
    else {
      console.log("false");
      image.src = rabbit }
    };
  
 
  // where the magic happens
  return (
    <div className="buttons">
      <div className="likeButton">
        {likeCounter}
        <AiFillLike onClick={() => changeLike()} fill={buttonLike}/>
      </div>

      <div className="changeAvatar">
        <MdPerson onClick={() => changeImage()}/>
      </div>

      <div className="heartButton">
        {heartCounter}
        <FaHeart onClick={() => changeHeart()} fill={buttonHeart}/>
      </div>
    </div>
  
  )
};