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
    style.top = "0px";

    return style;
  };

  selectionOverlapping = (startIdx, endIdx) => {
    return this.props.annotations.some((annotation) => {
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
    const selection = this.state.selectedAnnotationId;
    if (this.props.lyrics === null || this.props.annotations === null) {
      return <div></div>;
    } else {
      const annotations = this.props.annotations;
      return (
        <div>
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
                tempAnnotation={annotations}
                afterSubmit={this.afterSubmit}
                handleCancelCreate={this.handleCancelCreate}
                annotationId={selection}
                songId={this.props.songId}
              />
            </div>
          </div>
          <div id="footer-annotation">
            <Annotation
              id="mobile"
              popupStyle={this.state.popupStyle}
              selectedStart={this.state.selectedStart}
              selectedEnd={this.state.selectedEnd}
              tempAnnotation={annotations}
              afterSubmit={this.afterSubmit}
              handleCancelCreate={this.handleCancelCreate}
              annotationId={selection}
              songId={this.props.songId}
            />
          </div>
        </div>
      );
    }
  }
}
export default LyricsPage;
