import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <form
        onSubmit={() => this.setState({ comment: '' })}
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
