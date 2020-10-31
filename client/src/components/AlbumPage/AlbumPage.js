import React, { useEffect, useState } from "react";
import "./album.css";
import SongBlock from "../shared_components/SongBlock/SongBlock";
import TitleBlock from "../shared_components/TitleBlock/TitleBlock";
import { arrayOfSongs as albumSongs } from "../arrayOfSongs";
import { useParams } from "react-router-dom";
import network from "../../network/network";

function AlbumPage() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState();
  useEffect(() => {
    (async () => {
      try {
        const album = await network.get(`api/v1/album/byId/${albumId}`);
        setAlbum(album);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [albumId]);
  return (
    <div className="albumPage">
      {album && (
        <TitleBlock
          type="album"
          id={album.id}
          title={album.name}
          description={album.description}
          numberOfSong={albumSongs.length}
          coverImg={album.coverImg}
        />
      )}
      {album && (
        <div className="albumPage__songBlock">
          <SongBlock
            songsToRender={album.Songs}
            name={album.name}
            type="album"
            typeId={album.id}
          />
        </div>
      )}
    </div>
  );
}

export default AlbumPage;
