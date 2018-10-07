import * as React from "react";

export default function SongDetails(props) {
      console.log(props.playlist)
  return (
    // console.log(props)
    <div>
      <form onSubmit={() => this.handleSubmit}>
        <label>
          Add Title:
          <input type="text" onChange={this.updateInput}></input>
          <input type = "submit" onClick={this.handleSubmit}/>

          Add Artist:
          <input type="text" onChange={this.updateInput}></input>
          <input type = "submit" onClick={this.handleSubmit}/>

          Add Album:
          <input type="text" onChange={this.updateInput}></input>
          <input type = "submit" onClick={this.handleSubmit}/>
        </label>
      </form>
    </div>
  );
}
