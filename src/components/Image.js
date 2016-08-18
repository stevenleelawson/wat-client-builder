import React, { Component } from 'react';
import '../App.css';

class Image extends Component {

  render() {
    return (
      <div className="col-md-3 col-md-offset-10">
        <img className="picture" src={this.props.image_url} />
      </div>
    );
  }
}

export default Image;
