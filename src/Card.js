import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  render() {
    return (
      <div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Panel title</h3>
            </div>
              <div class="panel-body" id="card">
                  <p>Panel content</p>
                  More content
              </div>
          </div>
      </div>
    );
  }
}

export default Card;
