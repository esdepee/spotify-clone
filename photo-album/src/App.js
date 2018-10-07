import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addSong } from "./actions/addSong";
import { addPlaylist } from "./actions/addPlaylist";
import PlaylistDetails from "./components/PlaylistDetails";
import SongDetails from "./components/SongDetails";

const data = {

  "Chill": [
    {
      title: "asd",
      artist: "me",
      album: "das"
    },
    {
      title: "dasds",
      artist: "msad",
      album: "ddsas"
    },
    {
      title: "asd",
      artist: "me",
      album: "das"
    },
  ],
  "classic": [
    {
      title: "asd",
      artist: "me",
      album: "das"
    },
  ],
  "Feeling edgy": [
    {
      title: "asd",
      artist: "me",
      album: "das"
    },
    {
      title: "asd",
      artist: "me",
      album: "das"
    },
  ]
};

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedPlaylist: "",
        inputValue: ""
      };
      this.updateInput = this.updateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  // state = {
  //   selectedPlaylist: ""
  // };

  updateSelection = event => {
    this.setState({
      selectedP: { ...data[event.target.value], name: event.target.value }
    });
  };
  // updateInputValue = (evt) => {
  //   this.setState({
  //     inputValue: evt.target.value
  //   });
  // }
  updateInput(event){
    this.setState({inputValue : event.target.value})
  }
  handleSubmit(){
    let o = ""
    o = this.state.inputValue
    console.log(o)
    data[o] = [{}]
    console.log(data)
  }




  render() {
    console.log(data)
    // const { handleSubmit } = props
    return (
      <div className="App">
        <PlaylistDetails playlist={this.props.playlist} />
        <select onChange={this.updateSelection}>
        <option value = "">-- dont select --</option>
          {Object.keys(data).map(playlist => (
            <option key={playlist} value={playlist}>
              {playlist}
              ({data[playlist].title})
            </option>
          ))}
        </select>
        <button onClick={() => this.props.addPlaylist(this.state.selectedP)}>
          Select
        </button>
        <form onSubmit={() => this.handleSubmit}>
          <label>
            Add Playlist:
            <input type="text" onChange={this.updateInput}></input>
          </label>
          <input type = "submit" onClick={this.handleSubmit}/>
        </form>
        <button>
          AddSong
        </button>
      </div>
    );
  }
}
// ref={(ref) => this.nameTextInput = console.log(ref)
const mapStateToProps = state => {
  return {
    playlist: state.playlist
  };
};

export default connect(
  mapStateToProps,
  { addPlaylist }
)(App);


// <input type="text" name = "name" />
// <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
