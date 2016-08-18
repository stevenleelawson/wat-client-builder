import React, { Component } from 'react';
import '../App.css';

class Description extends Component {

  render() {
    return (
      <div className="col-md-offset-3">
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
