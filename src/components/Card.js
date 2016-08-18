import React, { Component } from 'react';
import '../App.css';
import Title from './Title';
import Image from './Image';
import Vote from './Vote';
import Description from './Description';


class Card extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     resources
  //   };
  // }
  render() {
    return (
      <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <Title title={this.props.resource.title}/>
          <Image image_url={this.props.resource.image_url}/>
        </div>

            <div className="panel-body" id="card">
              <Vote votes={this.props.resource.votes}/>
              <Description description={this.props.resource.description}/>
            </div>
          </div>
      </div>

    );
  }
}

export default Card;
