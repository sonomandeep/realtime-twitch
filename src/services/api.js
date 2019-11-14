import axios from "axios";

const twitchBaseUrl = "https://api.twitch.tv/helix/";

const twitch = axios.create({
  baseURL: twitchBaseUrl,
  timeout: 10000,
  headers: {
    "Client-ID": "0m7mjx5gk0km1ucct94bbafd0qub1s"
  }
});

const formatParams = params => {
  let result = "";
  params.forEach(param => {
    result += `&${param}`;
  });
  return result;
};

const searchGame = gameName => {
  return twitch.get(`games?name=${gameName}`);
};

const getGames = () => {
  return twitch.get("games/top");
};

const getGameStreams = (id, params = []) => {
  return twitch.get(`streams?game_id=${id}${formatParams(params)}`);
};

export { getGames, getGameStreams, searchGame };
