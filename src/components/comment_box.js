import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="comment-box"
      >
				<textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
				<button action="submit">Submit</button>
			</form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);
