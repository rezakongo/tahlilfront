import axios from "axios";
import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import Annotation from "./Annotation/Annotation";
import LyricsDisplay from "./LyricsDisplay";
import "./Song.css";
class LyricsPage extends Component {
  state = {
    lyrics: "",
    song: {
      comments: [],
      loading: true,
    },
    annotations: [
      {
        id: 1,
        author_id: "2",
        start_index: "0",
        end_index: "20",
        body: "PB - classic late night snack",
        song_id: "1",
        updated_at: "2016-07-11T17:24:19.009Z",
        author: "songsta",
      },
      {
        id: 53,
        author_id: "1",
        start_index: "41",
        end_index: "52",
        body: "Write something interesting...I am wiring things because it is very intersting and we should all listen to the way that this will look on screen and yeah!",
        song_id: "1",
        updated_at: "2017-10-10T02:10:07.462Z",
        author: "guest",
      },
    ],
    editing: false,
    selectedStart: "",
    selectedEnd: "",
    showInfo: true,
    selectedAnnotationId: "",
  };

  handleHighlightClick = (e) => {
    const element = e.target;
    this.setState({
      popupStyle: this.heightOfElement(element),
      selectedAnnotationId: parseInt(e.target.id),
    });
  };
  handleHighlight = (e) => {
    const selection = window.getSelection();
    const indices = [selection.anchorOffset, selection.focusOffset];
    const sortedIndices = indices.sort((a, b) => a - b);
    this.setState({
      selectedStart: sortedIndices[0],
      selectedEnd: sortedIndices[1],
    });
    if (selection.isCollapsed || this.selectionOverlapping(...sortedIndices)) {
      this.setState({
        showInfo: true,
        selectedAnnotationId: "",
      });
    } else {
      const element = selection.getRangeAt(0);
      this.setState({ popupStyle: this.heightOfElement(element) });
      this.activateAnnotationPrompt();
    }
    console.log(this.state.selectedStart + "  - " + this.state.selectedEnd);
  };

  heightOfElement = (element) => {
    const style = {};
    const relative = document.body.parentNode.getBoundingClientRect();
    const r = element.getBoundingClientRect();
    const relHeight = r.top - relative.top - 455;
    if (relHeight < 125) {
      style.top = "0px";
    } else {
      style.top = relHeight + "px";
    }
    return style;
  };

  selectionOverlapping = (startIdx, endIdx) => {
    return this.state.annotations.some((annotation) => {
      return !(
        endIdx < annotation.start_index || startIdx > annotation.end_index
      );
    });
  };

  activateAnnotationPrompt = () => {
    this.setState({
      selectedAnnotationId: "prompt",
    });
    window.addEventListener("click", (event) => {
      if (
        !event.target.closest("#annotation-prompt") === null &&
        this.state.selectedAnnotationId === "prompt"
      ) {
        this.setState({
          selectedAnnotationId: "",
        });
      }
    });
    console.log(this.state.selectedStart + "  - " + this.state.selectedEnd);
  };

  render() {
    const annotations = this.state.annotations;
    const selection = this.state.selectedAnnotationId;
    if (this.props.lyrics === null) {
      return <div></div>;
    } else {
      return (
        <div className="not-splash">
          <div className="song-left-col">
            <LyricsDisplay
              song={this.state.song}
              annotations={annotations}
              lyrics={this.props.lyrics}
              selected={selection}
              onHighlight={this.handleHighlight}
              handleHighlightClick={this.handleHighlightClick}
            />
          </div>
          <div className="song-right-col">
            <Annotation
              popupStyle={this.state.popupStyle}
              selectedStart={this.state.selectedStart}
              selectedEnd={this.state.selectedEnd}
              tempAnnotation={this.tempAnnotation}
              afterSubmit={this.afterSubmit}
              handleCancelCreate={this.handleCancelCreate}
              annotationId={selection}
            />
          </div>
        </div>
      );
    }
  }
}
export default LyricsPage;
