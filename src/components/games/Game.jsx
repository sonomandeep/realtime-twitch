import React from "react";
import { useSelector } from "react-redux";
import uuid from "uuid/v4";
import DragScroll from "react-dragscroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Game({ title, id }) {
  const streams = useSelector(state => state.streams[id]) || [];

  const getImageUrl = thumbnail_url => {
    return thumbnail_url.replace("{width}", 300).replace("{height}", 150);
  };

  streams.map(stream => console.log(getImageUrl(stream.thumbnail_url)));

  return (
    <div className="list-wrapper">
      <h1 className="list-title">{title}</h1>
      <DragScroll className="streams-list flex row">
        {streams.map(stream => (
          <div
            key={uuid()}
            className="list-element"
            onClick={() => console.log("Premuto")}
          >
            <div className="list-element-inner">
              <LazyLoadImage
                src={getImageUrl(stream.thumbnail_url)}
                className="list-element-image"
              />
            </div>
            <div className="list-element-info">
              <h2 className="list-element-title">{stream.title}</h2>
              <div className="list-element-info-inner flex row">
                <h3 className="list-element-channel-name">
                  {stream.user_name}
                </h3>
                <h4 className="list-element-counter">{stream.viewer_count}</h4>
              </div>
            </div>
          </div>
        ))}
      </DragScroll>
    </div>
  );
}

export default Game;
