import axios from "axios";
import { twitchBaseUrl } from "../utils/constants";

const twitch = axios.create({
  baseURL: twitchBaseUrl,
  timeout: 1000,
  headers: {
    Accept: "application/vnd.twitchtv.v5+json",
    "Client-ID": "0m7mjx5gk0km1ucct94bbafd0qub1s"
  }
});

const getStreams = () => {
  return twitch.get("streams?language=it");
};

const getGames = () => {
  return twitch.get("games/top");
};

export { getStreams, getGames };
