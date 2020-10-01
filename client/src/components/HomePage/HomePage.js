import React, {useState, useEffect} from 'react';
import './home.css';
import SquareRow from '../shared_components/squareRow/SquareRow';
import network from '../../network/network';

function HomePage() {
  const [topTens, setTopTens] = useState(Array(4).fill([]));
  useEffect(() => {
    (async () => {
      try {
        const top10 = await Promise.all([network.get('api/v1/song'), network.get('api/v1/album'), network.get('api/v1/artist'), network.get('api/v1/playlist')]);
        setTopTens(top10);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className='homePage'>
      <div className='homePage__welcome'>
        <h1>Just Play it!</h1>
      </div>
      <div className='homePage__row'>
        <p className='homePage__rowTitle'>Top 10 songs</p>
        <SquareRow arrayOfElements={topTens[0]} type='song' />
      </div>
      <div className='homePage__row'>
        <p className='homePage__rowTitle'>Top 10 artists</p>
        <SquareRow arrayOfElements={topTens[1]} type='artist' />
      </div>
      <div className='homePage__row'>
        <p className='homePage__rowTitle'>Top 10 album</p>
        <SquareRow arrayOfElements={topTens[2]} type='album' />
      </div>
      <div className='homePage__row'>
        <p className='homePage__rowTitle'>Top 10 playlists</p>
        <SquareRow arrayOfElements={topTens[3]} type='playlist' />
      </div>
    </div>
  );
}

export default HomePage;
