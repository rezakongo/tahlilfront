import dateFormat from "dateformat";
import React, { Component } from "react";
import { Comment, Divider, Form, Header } from "semantic-ui-react";
import axios from "axios";
import Button from "../../ProfileEdit/CustomButtons/Button.js";
import "./comment.css";

class Annotation extends Component {
  state = {
    comment: "",
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("comment", this.state.comment);
      axios.post(
        `http://37.152.182.41/Lyrics/LyricsCommentAPI/?id=${this.props.songId}&start=${this.props.selectedStart}&end=${this.props.selectedEnd}`,
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
      console.log(this.props.tempAnnotation);
    };

    const command = this.props.annotationId;
    const commentData = this.props.tempAnnotation.filter((entry) =>
      Object.values(entry).some((val) => entry.id === command)
    );
    console.log(command);
    let annotationSegment = <div></div>;
    if (command === "prompt") {
      annotationSegment = (
        <div className="prompt" id="annotation-prompt">
          <Form inverted onSubmit={handleSubmit}>
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
        <div>
          <Comment.Group id="commentsContainer">
            {commentData.map((comment) => {
              return (
                <div>
                  <Divider inverted id="commentDivider" />
                  <Comment id="commentContainer2">
                    <Comment.Avatar
                      className="commentAvatar"
                      src={`http://37.152.182.41/${comment.userimage}`}
                    />
                    <Comment.Content>
                      <Comment.Author
                        id="commentAuthor"
                        as="a"
                        href={`/profile/${comment.username}`}
                      >
                        {comment.username}
                      </Comment.Author>
                      <Comment.Text id="commentText">
                        {comment.comment}
                      </Comment.Text>
                      <Comment.Text id="commentMetadata">
                        Posted: &nbsp;
                        {dateFormat(comment.date, " d mmmm, yyyy")}
                      </Comment.Text>
                    </Comment.Content>
                  </Comment>
                  <Divider inverted id="commentDivider" />
                </div>
              );
            })}
          </Comment.Group>
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
