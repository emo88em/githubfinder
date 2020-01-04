import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const { icon, title } = this.props;
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
