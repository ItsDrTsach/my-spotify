import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import YouTube from 'react-youtube';
import './songPage.css';
import network from '../../network/network';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};
function SongPage() {
  const {songId} = useParams();
  const [song, setSong] = useState();
  useEffect(() => {
    (async () => {
      try {
        const song = await network.get(`api/v1/song/byId/${songId}`);
        setSong(song);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log({song});

  // Functions
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className='songPage'>
      {song && (
        <div className='songPage__song'>
          <YouTube videoId={song.youtubeLink.slice(32)} opts={opts} onReady={() => onReady} />
          {song.name && (
            <div className='songPage__details'>
              <div className='songPage__label'>
                <span>Song name :</span>
                <span>{song.name}</span>
              </div>
              <div className='songPage__label'>
                <span>Artist name :</span>
                <span>{song.Artist.name}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SongPage;
