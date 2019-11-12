import axios from "axios";

const twitchBaseUrl = "https://api.twitch.tv/helix/";

const twitch = axios.create({
  baseURL: twitchBaseUrl,
  timeout: 10000,
  headers: {
    // Accept: "application/vnd.twitchtv.v5+json",
    "Client-ID": "0m7mjx5gk0km1ucct94bbafd0qub1s"
  }
});

const getStreams = () => {
  return twitch.get("streams?language=it");
};

const getGames = () => {
  return twitch.get("games/top");
};

const getGameStreams = id => {
  return twitch.get(`streams?game_id=${id}`);
};

export { getStreams, getGames, getGameStreams };
