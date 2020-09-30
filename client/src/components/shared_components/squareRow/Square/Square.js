import React from "react";
import "./square.css";
function Square({ title, url }) {
  return (
    <div className="square">
      <img className="square__img" src={url} alt={title} />
      <p className="square__title">{title}</p>
    </div>
  );
}

export default Square;
