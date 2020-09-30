import React from "react";
import play from "./img/play.png";
import like from "./img/like.png";
import "./song.css";
import { Link } from "react-router-dom";

function SongRow({
  songId,
  name,
  artist,
  length,
  type = "album",
  artistId,
  typeId,
}) {
  const playLink = `/song/${songId}`
  const artistLink = `/artist?artistId=${artistId}`;
  const likeSong = () => {
    alert(`like song with id ${songId}`);
  };
  return (
    <div className="songRow">
      <button>
        <Link to={playLink} className="songRow__link">
          <img src={play} alt="play" />
        </Link>
      </button>
      <p>{name}</p>
      <p>
        <Link to={artistLink} className="songRow__link">
          {artist}
        </Link>
      </p>
      <button onClick={likeSong}>
        <img src={like} alt="like" />
      </button>
      <p>{length}</p>
    </div>
  );
}

export default SongRow;
