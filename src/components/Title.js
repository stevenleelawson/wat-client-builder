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
        <a href={this.props.url}><h2>{this.props.title}</h2></a>
      </div>
    );
  }
}

export default Title;
