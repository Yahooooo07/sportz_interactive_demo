import { GET_PLAYERS } from "../actions/Types";

const initialState = {
  playerListings: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return { ...state, playerListings: action.payload };
    default:
      return state;
  }
}
