import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { CommentData } from "./CommentData.js";

const CommentGroup = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>
    {CommentData.map((Comment) => {
      return (
        <Comment>
          <Comment.Avatar src={Comment.avatar} />
          <Comment.Content>
            <Comment.Author as="a">{Comment.author}</Comment.Author>
            <Comment.Metadata>
              <div>{Comment.date}</div>
            </Comment.Metadata>
            <Comment.Text>{Comment.text}</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    })}
  </Comment.Group>
);

export default CommentGroup;
