const React = require("react");

const CommentForm = React.createClass({
  getInitialState() {
    return {
      body: "",
      editing: false,
      loggedIn: SessionStore.isUserLoggedIn(),
    };
  },

  componentDidMount() {},

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onStoreChange() {
    this.setState({
      body: "",
      editing: false,
    });
  },

  _onSessionChange() {
    this.setState({
      loggedIn: false,
    });
  },

  handleChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
    if (e.target.value !== "") {
      this.setState({ editing: true });
    } else {
      this.setState({ editing: false });
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
    };

    CommentActions.createComment(comment);
  },

  handleCancelCreate(e) {
    e.preventDefault();
    this.replaceState(this.getInitialState());
  },

  render() {
    const buttonGroupViewClass = this.state.editing ? "" : "invisible";

    const buttonGroup = (
      <div className={buttonGroupViewClass}>
        <input
          className="submit"
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
        <button className="cancel-button" onClick={this.handleCancelCreate}>
          Nevermind
        </button>
      </div>
    );

    const prompt = (
      <div className={buttonGroupViewClass}>
        <CommentPrompt />
      </div>
    );

    let loginOrButtonGroup;
    if (this.state.loggedIn) {
      loginOrButtonGroup = buttonGroup;
    } else {
      loginOrButtonGroup = prompt;
    }

    return (
      <div className="annotation-form comment-form clearfix">
        <textarea
          value={this.state.body}
          placeholder="Add comment..."
          onChange={this.handleChange}
        />
        {loginOrButtonGroup}
      </div>
    );
  },
});

module.exports = CommentForm;
