const React = require("react");
const VoteForm = require("../vote/vote_form");

const CommentsIndexItem = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {},

  componentWillUnmount() {},

  _onSessionChange() {},

  render() {
    let userButton;
    if ("test2" === "test") {
      userButton = <button className="cancel-button">Delete</button>;
    }

    return (
      <div>
        <div className="comment clearfix">
          <div className="comment-container clearfix">
            <div className="comment-content">
              <div className="comment-author">"test"</div>
              <div className="comment-body">"test2"</div>
            </div>
            {userButton}
          </div>
        </div>
        <VoteForm
          key={"commentVote" + "2"}
          upvotableId={this.props.comment.id}
          upvotableType="Comment"
          votes={this.props.comment.votes}
        />
      </div>
    );
  },
});

module.exports = CommentsIndexItem;
