/*import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
  
const app = props => {
  const [ personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });

  const [otherState, setOtherState] = useState('some other value')

    console.log(personsState, otherState);

const switchNameHandler = () => {
  setPersonsState({
    persons: [
      { name: 'Max', age: 38 },
      { name: 'Manu', age: 29 },
      { name: 'Stephen', age: 26 }
    ]
  });
}

    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
      </div>
    );
  
}

export default app;
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Particles from 'react-particles-js';

class App extends Component{
  
  render(){
      return (
          <Particles />
      );
  };

}

export default App;

