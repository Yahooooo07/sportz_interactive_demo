/* eslint-disable import/no-anonymous-default-export */
import { GET_PLAYERS } from "../actions/Types";

const initialState = {
  playerListings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return { ...state, playerListings: action.payload };
    default:
      return state;
  }
};
