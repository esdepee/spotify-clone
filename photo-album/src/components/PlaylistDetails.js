import * as React from "react";

export default function PlaylistDetails(props) {
      console.log(props.playlist)
  return (
    // console.log(props)
    <div>
      {props.playlist.map((playlist,index) => (
        <ul key={index}>
          <li>Playlist: {playlist.name}</li>
          <li>Title: {playlist[index].title}</li>
          <li>Artist: {playlist[index].artist}</li>
          <li>Album: {playlist[index].album}</li>
        </ul>
      ))}
    </div>
  );
}
