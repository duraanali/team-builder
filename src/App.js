import React, { Component } from 'react';
import Header from './components/layout/Header'
import './App.css';
import Teams from './components/Teams'
import Form from './components/Form'
import uuid from 'uuid';

class App extends Component {
  state = {
    members: [
      {
        id: uuid.v4(),
        username: 'Duraan',
        role: 'student',
        email: 'duraan@yahoo.com',
        password: '123'
      },
      {
        id: uuid.v4(),
        username: 'James',
        role: 'teacher',
        email: 'james@yahoo.com',
        password: '1233'
      },
      {
        id: uuid.v4(),
        username: 'John',
        role: 'manager',
        email: 'john@yahoo.com',
        password: '1234'
      }
    ]
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Form Form={this.Form} />
          <Teams members={this.state.members} />
        </div>
      </div>
    );
  }
}
export default App;
