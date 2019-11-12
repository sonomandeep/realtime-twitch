import React from "react";
import { useSelector } from "react-redux";
import uuid from "uuid/v4";

function Game({ title, id }) {
  const streams = useSelector(state => state.streams[id]) || [];

  const getImageUrl = thumbnail_url => {
    return thumbnail_url.replace("{width}", 300).replace("{height}", 150);
  };

  streams.map(stream => console.log(getImageUrl(stream.thumbnail_url)));

  return (
    <div className="list-wrapper">
      <h1 className="list-title">{title}</h1>
      <div className="streams-list flex row">
        {streams.map(stream => (
          <div key={uuid()} className="list-element">
            <div className="list-element-inner">
              <img
                src={getImageUrl(stream.thumbnail_url)}
                className="list-element-image"
              />
            </div>
            <div className="list-element-title">
              <h2>{stream.title}</h2>
            </div>
            <div className="list-element-counter">{stream.viewer_count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
