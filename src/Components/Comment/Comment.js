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
          <Comment.Avatar src={CommentData.avatar} />
          <Comment.Content>
            <Comment.Author as="a">{CommentData.author}</Comment.Author>
            <Comment.Metadata>
              <div>{CommentData.date}</div>
            </Comment.Metadata>
            <Comment.Text>{CommentData.text}</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    })}
    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default CommentGroup;
