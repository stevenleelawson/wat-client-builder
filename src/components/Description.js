import React, { Component } from 'react';
import '../App.css';

class Description extends Component {

  render() {
    return (
      <div className="col-md-offset-3">
        <h3>{this.props.description}</h3>
      </div>
    );
  }
}

export default Description;
