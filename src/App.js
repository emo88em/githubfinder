import React from 'react';
import NavBar from './components/layout/NavBar';
import User from './components/users/User';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <User />
      </div>
    );
  }
}

export default App;
