import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Square from './Square/Square';
import './squareRow.css';
function SquareRow({ arrayOfElements, type }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className='squareRow'>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        breakPoints={breakPoints}
      >
        {arrayOfElements.map((element, i) => {
          const link = `/${type}/${element.id}`;

          return (
            <Link key={i} to={link} className='squareRow__link'>
              <Square
                className='squareRow__square'
                title={element.name}
                url={element.coverImg}
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SquareRow;
