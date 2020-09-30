import React from "react";
import { Link } from "react-router-dom";
import "./addNav.css";
function AddNav() {
  return (
    <nav className="addNav">
      <Link to="/add/song" className="addNav__link">
        <p>Add song</p>
      </Link>
      <Link to="/add/album" className="addNav__link">
        <p>Add Album</p>
      </Link>
      <Link to="/add/artist" className="addNav__link">
        <p>Add Artist</p>
      </Link>
      <Link to="/add/playlist" className="addNav__link">
        <p>Add playlist</p>
      </Link>
    </nav>
  );
}

export default AddNav;
