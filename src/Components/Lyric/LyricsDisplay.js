import React, { Component } from "react";
import Lyrics from "./Lyrics";

class LyricsDisplay extends Component {
  state = {};

  populatedLyrics = () => {
    if (this.props.annotations.length === 0 || !this.props.song.lyrics) {
      return this.props.song.lyrics;
    }

    const lyrics = this.props.song.lyrics;
    const lyricsEls = [];

    let tracked = 0;
    for (let annotation of this.props.annotations) {
      let viewClass = "";
      if (this.props.selected === annotation.id || annotation.id === "temp") {
        viewClass = "selected-annotation";
      }

      lyricsEls.push(lyrics.slice(tracked, annotation.start_index));
      lyricsEls.push(
        <a
          onClick={this.props.handleHighlightClick}
          key={annotation.id}
          id={annotation.id}
          className={viewClass}
        >
          {lyrics.slice(annotation.start_index, annotation.end_index)}
        </a>
      );
      tracked = annotation.end_index;
    }
    lyricsEls.push(lyrics.slice(tracked));
    return lyricsEls;
  };
  render() {
    return (
      <div className="lyrics-display">
        <h3>{this.props.song.title} Lyrics</h3>
        <Lyrics 
          populatedLyrics={this.populatedLyrics()}
          lyrics={this.props.lyrics}
          onHighlight={this.props.onHighlight}
        />
      </div>
    );
  }
}

export default LyricsDisplay;
