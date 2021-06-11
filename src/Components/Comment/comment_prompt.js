const React = require("react");

const CommentPrompt = React.createClass({
  getInitialState() {
    return {
      showForm: "",
    };
  },

  componentDidMount() {},

  componentWillUnmount() {},

  _onUserChange() {},

  revealLogin(e) {
    e.preventDefault();
  },

  revealSignup(e) {
    e.preventDefault();
  },

  render() {
    let promptContent;

    if (this.state.showForm === "login") {
      promptContent = (
        <div id="annotation-login" className="annotation-login"></div>
      );
    } else if (this.state.showForm === "signup") {
      promptContent = (
        <div id="annotation-login" className="annotation-login"></div>
      );
    } else {
      promptContent = (
        <div id="annotation-signup-button" className="annotation-prompt">
          <a className="signup" onClick={this.revealSignup}>
            Signup
          </a>
          <span className="dividing-text">or</span>
          <a onClick={this.revealLogin}>Login</a>
          <span className="dividing-text">to comment</span>
        </div>
      );
    }

    return (
      <div className="prompt" id="annotation-prompt">
        {promptContent}
      </div>
    );
  },
});

module.exports = CommentPrompt;
