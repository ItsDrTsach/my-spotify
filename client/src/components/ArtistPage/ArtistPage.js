import React, {useEffect, useState} from 'react';
import './artist.css';
import SongBlock from '../shared_components/SongBlock/SongBlock';
// import play from "../shared_components/TitleBlock/img/play_black.png";
// import shuffle from "../shared_components/TitleBlock/img/shuffle_black.png";
// import like from "../shared_components/TitleBlock/../SongRow/img/like.png";
import {Link, useParams} from 'react-router-dom';
import network from '../../network/network';

// const bestSongsOfArtist = arrayOfSongs;

function ArtistPage() {
  // const playLink = `/song?songId=0&songContext=artist&shuffle=false&contextId=${artist.artist_id}`;
  // // const shuffleLink = `/song?songId=0&songContext=artist&shuffle=true&contextId=${artist.artist_id}`;
  // const likeArtist = () => {
  //   alert("like artist");
  // };
  const {artistId} = useParams();
  const [artist, setArtist] = useState();
  useEffect(() => {
    (async () => {
      try {
        const artist = await network.get(`api/v1/artist/byId/${artistId}`);
        setArtist(artist);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className='artistPage'>
      {artist && (
        <div className='artistPage__artist'>
          <div className='artistPage__typo'>
            <h1 className='artistPage__name'>{artist.name}</h1>
            <span className='artistPage__description'>{artist.description}</span>
            {/* <div className='titleBlock__control'>
              <Link to={playLink} className='artistPage__link ti'>
                <button className='titleBlock__button'>
                  <img src={play} alt='play'></img>
                  <span>play</span>
                </button>
              </Link>
              <Link to={shuffleLink} className='artistPage__link'>
                <button className='titleBlock__button'>
                  <img src={shuffle} alt='shuffle'></img>
                  <span>shuffle</span>
                </button>
              </Link>
              <button className='like' onClick={likeArtist}>
                <img src={like} alt='like'></img>
              </button>
            </div> */}
          </div>
          <div className='artistPage__imgContainer'>
            <img className='artistPage__img' src={artist.coverImg} alt={artist.name} />
          </div>
        </div>
      )}
      {artist && (
        <div className='artistPage__songBlock'>
          <h1>{artist.name}'s popular songs</h1>
          <SongBlock songsToRender={artist.Songs} type='artist' typeId={artist.id} />
        </div>
      )}
    </div>
  );
}

export default ArtistPage;
