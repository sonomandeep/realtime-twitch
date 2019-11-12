import React from "react";

function Game({ title, streams }) {
  return (
    <div className="list-wrapper">
      <h1 className="list-title">{title}</h1>
      <div className="streams-list flex row">
        {streams.map(stream => (
          <div className="list-element">
            <div className="list-element-inner">
              <div className="list-element-image"></div>
              <div className="list-element-counter">{stream.counter}</div>
            </div>
            <div className="list-element-title">
              <h2>{stream.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
