import React, { useEffect, useState } from "react";
import "./playlist.css";
import SongBlock from "../shared_components/SongBlock/SongBlock";
import TitleBlock from "../shared_components/TitleBlock/TitleBlock";
import network from "../../network/network";
import { useParams } from "react-router-dom";

function PlaylistPage() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState();
  useEffect(() => {
    (async () => {
      try {
        const playlist = await network.get(
          `api/v1/playlist/byId/${playlistId}`
        );
        setPlaylist(playlist);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [playlistId]);
  const playlistSongs = playlist
    ? playlist.PlaylistsSongs.reduce((acc, element, index) => {
        console.log({ acc, element, index });
        acc = acc.concat([element.Song]);
        return acc;
      }, [])
    : null;
  return (
    <div className="playlistPage">
      {playlist && (
        <TitleBlock
          id={playlist.id}
          type="playlist"
          coverImg={playlist.coverImg}
          createdAt={playlist.createdAt}
          title={playlist.name}
          description={playlist.description}
          numberOfSong={playlist.PlaylistsSongs.length}
        />
      )}
      {playlist && (
        <div className="playlistPage__songBlock">
          <SongBlock
            songsToRender={playlistSongs}
            name={playlist.name}
            type="playlist"
            typeId={playlist.playlistId}
          />
        </div>
      )}
    </div>
  );
}

export default PlaylistPage;
