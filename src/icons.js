import React, { useState } from 'react';
import './App.css';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { RiHeartLine } from 'react-icons/ri';
import { RiHeartFill } from 'react-icons/ri';

export default function Icons() {
  //set default
  const [buttonLike, setButtonLike] = useState(AiOutlineLike);
  const [buttonHeart, setButtonHeart] = useState(RiHeartLine);

  // func to change button
  const changeLike = (text) => setButtonLike(text);
  const changeHeart = (text) => setButtonHeart(text);

// where the magic happens
  return (
    <div className="buttons">
      <div className="likeButton">
        <button onClick={() => changeLike(AiFillLike)}>{buttonLike}</button>
      </div>

      <div className="heartButton">
        <button onClick={() => changeHeart(RiHeartFill)}>{buttonHeart}</button>
      </div>
    </div>
  
  )
};

// https://stackoverflow.com/questions/53685140/how-to-change-button-text-in-reactjs