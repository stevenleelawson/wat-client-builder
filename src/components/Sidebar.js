import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component {
  render() {
    return (
        <div>
          <div className="col-md-3 side">
            <i className="fa fa-user fa-5x ello" aria-hidden="true"></i>
            <h1 className="ello">ELLO,</h1>
            <h1 className="ello">You Tool!!<i class="fa fa-wrench"            aria-hidden="true"></i></h1>
     <a href="http://watserver.herokuapp.com/auth/github"><button>GitHub SignIn</button></a>
          </div>

        </div>
  
    );
  }
}

export default Sidebar;
