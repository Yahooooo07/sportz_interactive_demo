import { GET_PLAYERS } from "./Types";
import axios from "axios";
import { url } from "../config";
const player = url + "d6bd0efc05639084eb17/";

export const getPlayers = () => (dispatch) => {
  return axios
    .get(player)
    .then((res) => {
      dispatch({
        type: GET_PLAYERS,
        payload: res.data.playerList,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
