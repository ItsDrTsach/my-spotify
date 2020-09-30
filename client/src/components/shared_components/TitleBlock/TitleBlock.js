import React from "react";
import "./titleBlock.css";
import play from "./img/play_black.png";
import shuffle from "./img/shuffle_black.png";
import like from "../SongRow/img/like.png";
import { Link } from "react-router-dom";
function TitleBlock({
  type,
  id,
  coverImg,
  title,
  description,
  numberOfSong,
  createdAt,
}) {
  return (
    <div className="titleBlock">
      <img className="titleBlock__cover" src={coverImg} alt={title} />
      <div className="titleBlock__info">
        <div className="titleBlock__details">
          <span className="titleBlock__title">{title}</span>
          {createdAt && (
            <span className="titleBlock__created_at">
              added at {createdAt}
            </span>
          )}
          <span className="titleBlock__numberOfSongs">
            {numberOfSong} songs
          </span>
          <span className="titleBlock__description">{description}</span>
        </div>
              </div>
    </div>
  );
}

export default TitleBlock;
