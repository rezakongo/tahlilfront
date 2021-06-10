import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Button from "../../ProfileEdit/CustomButtons/Button.js";

class AnnotationPrompt extends Component {
  state = {
    loggedIn: true,
    showForm: "",
  };
  render() {
    let promptContent;

    if (!this.state.loggedIn) {
    } else {
      promptContent = (
        <Form inverted>
          <Form.TextArea placeholder="Add a comment" inverted id="AddComment" />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }

    return (
      <div className="prompt" id="annotation-prompt">
        {promptContent}
      </div>
    );
  }
}

export default AnnotationPrompt;
