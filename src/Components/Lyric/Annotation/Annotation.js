import dateFormat from "dateformat";
import React, { Component } from "react";
import AnnotationPrompt from "./AnnotationPrompt";
import Comment from "../../Comment/Comment";
export const commentData = [
  {
    username: "Spoiler240012",
    avatar: "/media/Images/test_H6AdhpI.png",
    context: "test",
    date: "2021-05-28T15:19:45.471481Z",
  },
  {
    username: "Spoiler240012",
    avatar: "/media/Images/test_H6AdhpI.png",
    context: "te",
    date: "2021-05-28T16:34:15.469886Z",
  },
  {
    username: "Spoiler240012",
    avatar: "/media/Images/test_H6AdhpI.png",
    context: "test1235",
    date: "2021-05-28T16:44:29.007999Z",
  },
  {
    username: "Spoiler2400",
    avatar: "/media/Images/test_jX5C5VI.png",
    context: "test2",
    date: "2021-05-29T12:22:05.899284Z",
  },
  {
    username: "Spoiler2400",
    avatar: "/media/Images/test_jX5C5VI.png",
    context: "test",
    date: "2021-06-01T14:30:11.688798Z",
  },
];
class Annotation extends Component {
  state = {};
  render() {
    const command = this.props.annotationId;
    let annotationSegment = <div></div>;
    if (command === "prompt") {
      annotationSegment = (
        <AnnotationPrompt handleClick={this.handlePromptClick} />
      );
    } else if (command > 0) {
      annotationSegment = (
        <div
          style={{
            maxHeight: "80vh",
            overflowY: "scroll",
          }}
        >
          <Comment
            login="true"
            type="artist"
            id="1433"
            commentData={commentData}
          />
        </div>
      );
    }
    return (
      <div
        id="annotation-segment"
        className="annotation-segment clearfix"
        style={this.props.popupStyle}
      >
        {annotationSegment}
      </div>
    );
  }
}

export default Annotation;
