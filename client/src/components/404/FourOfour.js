import React from "react";
import Borat from "./borat/Borat";
import "./four.css";
function Four() {
  // cover_img, title, description, numberOfSong
  return (
    <>
      <Borat />
      <div className="four">
        <div className="four__label">
          <p className="four__title">you found your page...</p>
          <p className="four__not">NOT</p>
          <p className="four__subtitle">something went wrong....</p>
          <p className="four__description">
            You can go to the home page and explore all the music you like
          </p>
        </div>
      </div>
    </>
  );
}

export default Four;
