import React from "react";
import { Comment, Divider, Form, Header } from "semantic-ui-react";
import Button from "../ProfileEdit/CustomButtons/Button.js";
import "./Comment.css";
import axios from "axios";
import dateFormat from "dateformat";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function UserComment(props) {
  const [show, setShow] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  const [comment, setComment] = React.useState("");
  const [commentData, setCommentData] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const onPageIncrease = () => {
    axios
      .get(
        `http://37.152.182.41/${props.type}CommentAPI/?id=${props.id}&commentlimit=1&commentpage=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setCommentData([...commentData, ...res.data.result]);
        console.log(commentData);
      });
    setPage(page + 1);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  React.useEffect(() => {
    if (first) {
      onPageIncrease();
      setFirst(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("comment", comment);

    axios
      .post(
        `http://37.152.182.41/api/page/${props.type}CommentAPI/?id=${props.id}`,
        formData,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("autToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        setComment("");
        setShow(true);
      });
  };
  const closeSnackbar = () => {
    setShow(false);
  };

  return (
    <Comment.Group id="commentsContainer">
      <Snackbar open={show} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity="success">
          Your comment has been successfully submitted
        </Alert>
      </Snackbar>
      <Header as="h3" dividing inverted id="commentDiv">
        Comments
      </Header>
      {commentData.map((comment) => {
        return (
          <div>
            <Comment id="commentContainer">
              <Comment.Avatar
                className="commentAvatar"
                src={`http://37.152.182.41/${comment.avatar}`}
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
      <a role="button" onClick={onPageIncrease}>
        <div id="showMoreComment">SHOW &nbsp;MORE</div>
      </a>
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
