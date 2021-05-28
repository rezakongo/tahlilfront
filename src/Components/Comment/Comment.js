import React from "react";
import { Comment, Divider, Form, Header } from "semantic-ui-react";
import Button from "../ProfileEdit/CustomButtons/Button.js";
import "./Comment.css";
import axios from "axios";
import dateFormat from "dateformat";

function UserComment(props) {
  const [show, setShow] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("comment", comment);

    axios.post(
      `http://127.0.0.1:8000/api/page/ArtistCommentAPI/?artistid=${props.id}`,
      formData,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("autToken")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <Comment.Group id="commentsContainer">
      <Header as="h3" dividing inverted id="commentDiv">
        Comments
      </Header>
      {props.commentData.map((comment) => {
        return (
          <div>
            <Comment id="commentContainer">
              <Comment.Avatar
                className="commentAvatar"
                src={`http://127.0.0.1:8000${comment.avatar}`}
              />
              <Comment.Content>
                <Comment.Author
                  id="commentAuthor"
                  as="a"
                  href={`/profile/${comment.username}`}
                >
                  {comment.username}
                </Comment.Author>
                <Comment.Text id="commentText">{comment.context}</Comment.Text>
                <Comment.Text id="commentMetadata">
                  Posted: &nbsp;{dateFormat(comment.date, " d mmmm, yyyy")}
                </Comment.Text>
              </Comment.Content>
            </Comment>
            <Divider inverted id="commentDivider" />
          </div>
        );
      })}
      <div>
        <Form
          id={props.login ? "AddCommentContainer" : "hidden"}
          inverted
          onSubmit={handleSubmit}
        >
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
      <div id={props.login ? "hidden" : "CommentLogin"}>
        <p>
          Please &nbsp;<a href="/signin">Login</a> &nbsp;or &nbsp;
          <a href="/signUp">Register</a> &nbsp;to &nbsp;post &nbsp;comment.
        </p>
      </div>
    </Comment.Group>
  );
}

export default UserComment;
