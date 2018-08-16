import React, { Component } from 'react';
import './App.css';

require('dotenv').config();

class App extends Component {

constructor() {
  super();
  this.state = {
    error: null,
    isLoaded: false,
    data: []
  }
}

componentWillMount() {

    const URL = `http://content.guardianapis.com/sport?edition=uk&show-fields=all&api-key=${process.env.REACT_APP_KEY}`;

    fetch(`${URL}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        });
};

componentWillUpdate(nextState, nextProps) {

};

  render() {
    return (
      <div className="App">
      Hello World
      </div>
    );
  }
}

export default App;
