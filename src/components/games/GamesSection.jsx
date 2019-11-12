import React from "react";
import Game from "./Game";

const streams = [
  {
    title: "League of legends #1",
    counter: 3000
  },
  {
    title: "League of legends #2",
    counter: 3000
  },
  {
    title: "League of legends #3",
    counter: 3000
  },
  {
    title: "League of legends League of legends League of legends #4",
    counter: 3000
  },
  {
    title: "League of legends League of legends League of legends #4",
    counter: 3000
  }
];

function GamesSection() {
  return (
    <div className="games-section full-width">
      <Game title="League of legends" streams={streams}></Game>
    </div>
  );
}

export default GamesSection;
