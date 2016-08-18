import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

const resources = [
  {
    resourceId: 1,
    category_id: 1,
    type_id: 1,
    person_id: 1,
    title: "Eloquent JavaScript",
    image_url: "http://eloquentjavascript.net/img/cover.png",
    url: "http://eloquentjavascript.net",
    votes: 3,
    description: "This is a book about JavaScript, programming, and the wonders of the digital.",
    is_free: true,
    categoryId: 1,
    name: "javascript"
  },
  {
  resourceId: 3,
  category_id: 1,
  type_id: 3,
  person_id: 1,
  title: "Fun Fun Functions",
  image_url: "https://i.ytimg.com/vi/ImwrezYhw4w/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=zg2utk9bh72hcfyfq06sbqNeuiA",
  url: "https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q",
  votes: 9,
  description: "The mad scientist of videoland, explaining all things JS. Fun, indeed",
  is_free: true,
  categoryId: 1,
  name: "javascript"
  },
  {
  resourceId: 4,
  category_id: 1,
  type_id: 2,
  person_id: 1,
  title: "Understanding-Scopes in Angular",
  image_url: "https://angular.io/resources/images/logos/angular2/angular.png",
  url: "https://github.com/angular/angular.js/wiki/Understanding-Scopes",
  votes: 8,
  description: "Understanding scopes and javascript prototypal inheritance",
  is_free: true,
  categoryId: 1,
  name: "javascript"
  },
  {
  resourceId: 5,
  category_id: 1,
  type_id: 3,
  person_id: 1,
  title: "Latent flip",
  image_url: "http://www.appsdev.is.ed.ac.uk/blog/wp-content/uploads/2015/03/Event-loop.png",
  url: "http://latentflip.com/loupe",
  votes: 10,
  description: "Loupe is a little visualisation to help you understand how JavaScript's call stack/event loop/callback queue interact with each other.",
  is_free: true,
  categoryId: 1,
  name: "javascript"
}

];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resources
    };
  }
  render() {
    var cards = resources.map(function(resource, i){
      return <Card resource={resource} />
     })
    return (
  <div className="container">
      <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/"><img className="logo" src="../images/updatedlogo.png" alt="logo"  /></a>
      </div>

      <div className="collapse navbar-collapse headline" id="bs-example-navbar-collapse-1">
        <h1 className="textStuff">W.A.T. <span>WE ARE TOOLS</span></h1>
        <h2><em>-Tools for learning web development</em></h2>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
    <div>
      <h2 className="category">JavaScript</h2>
      <div className="cardScroll">
        {cards}
      </div>
    </div>
    </div>
  </div>
 </div>
    );
  }
}

export default App;
