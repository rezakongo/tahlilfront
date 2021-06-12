import dateFormat from "dateformat";
import React, { Component } from "react";
import Comment from "../../Comment/Comment";
import axios from "axios";
import { Form } from "semantic-ui-react";
import Button from "../../ProfileEdit/CustomButtons/Button.js";

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
  state = {
    comment: "",
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      let formData = new FormData();

      axios.post(
        `http://127.0.0.1:8000/api/page/ArtistCommentAPI/?artistid=`,
        formData,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("autToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    };

    const onChangeComment = (e) => {
      this.setState({ comment: e.target.value });
    };

    const command = this.props.annotationId;
    let annotationSegment = <div></div>;
    if (command === "prompt") {
      annotationSegment = (
        <div className="prompt" id="annotation-prompt">
          <Form inverted>
            <Form.TextArea
              placeholder="Add a comment"
              inverted
              id="AddComment"
              onChange={onChangeComment}
            />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
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
