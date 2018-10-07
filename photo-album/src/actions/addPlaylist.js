export const ADD_PLAYLIST = "ADD_PLAYLIST";

export function addPlaylist(playlist) {
  return {
    type: ADD_PLAYLIST,
    payload: playlist
  };
}
