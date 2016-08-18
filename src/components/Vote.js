import React, { Component } from 'react';
import '../App.css';

class Vote extends Component {

  render() {
    return (
      <div className="col-md-3">
        <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        <h3 className="voteTag">Vote {this.props.votes}</h3>
        <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
      </div>
    );
  }
}

export default Vote;
