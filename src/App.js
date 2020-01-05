import React from 'react';
import NavBar from './components/layout/NavBar';
import SeachBar from './components/users/Search';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  //To view all, marked it off as its not needed anymore due to searchUsers
  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  //search github users from Search component
  searchUsers = async text => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <SeachBar searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
