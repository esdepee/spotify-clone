import { ADD_PLAYLIST } from "../actions/addPlaylist";
const playlist = []

export default (state = [
  // playlist: []
], action = {}) => {
  switch (action.type) {
    case ADD_PLAYLIST:
      let o = 0;
      console.log(...state)
      // console.log(state)
      const returnObject = [ ...state ];
      const i = [...state, action.payload]
      console.log([...state, action.payload])
      console.log(action.payload)
      // for (var o = 0; o < i.length; o++) {
      //   return [...state, action.payload];
      // }
      // while (o = 0 !== i.length) {
      //   o++;
      //   return [...state, action.payload];
      // }
      console.log(returnObject)
      return [...state, action.payload];
    default:
      return state;
  }
};
