import React, { Component } from 'react';
import _ from 'lodash';
import '../App.css';

class Title extends Component {
renderTitle() {
  console.log(this.props.resources);
}
  render() {
    return (
      <div className="col-md-offset-3">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Title;
