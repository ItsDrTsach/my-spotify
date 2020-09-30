import React, { useEffect, useState } from 'react';
import './playlist.css';
import SongBlock from '../shared_components/SongBlock/SongBlock';
import TitleBlock from '../shared_components/TitleBlock/TitleBlock';
import network from '../../network/network';
import { useParams } from 'react-router-dom';

function PlaylistPage() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await network('get', `api/playlist/${playlistId}`);
        console.log({ data });
        setPlaylist(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className='playlistPage'>
      {playlist && (
        <TitleBlock
          id={playlist.id}
          type='playlist'
          coverImg={playlist.coverImg}
          createdAt={playlist.createdAt}
          title={playlist.name}
          description={playlist.description}
          numberOfSong={playlist.Songs.length}
        />
      )}
      {playlist && (
        <div className='playlistPage__songBlock'>
          <SongBlock
            songsToRender={playlist.Songs}
            name={playlist.name}
            type='playlist'
            typeId={playlist.playlistId}
          />
        </div>
      )}
    </div>
  );
}

export default PlaylistPage;
