import React from "react";
import "./SongBlock.css";
import SongRow from "../SongRow/SongRow";
//gets an array of song and return a block of song rows
function SongBlock({ songsToRender, name, type, typeId }) {
  return (
    <div className="songBlock">
      {songsToRender.length === 0 && <h1>there are no other songs...</h1>}
      {name && songsToRender.length !== 0 && (
        <h1>{`other songs from ${name}`}</h1>
      )}
      {songsToRender.map((song, i) => {
        const { id, name, artist, length } = song;
        return (
          <SongRow
            key={i}
            songId={id}
            name={name}
            artist={artist}
            artistId={3}
            length={length}
            song={song}
            type={type}
            typeId={typeId}
          />
        );
      })}
      )
    </div>
  );
}

export default SongBlock;
