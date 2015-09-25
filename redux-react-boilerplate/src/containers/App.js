import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="flex-container">
        <div className="flex-item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="flex-item">
          { children }
        </div>
      </div>
    );
  }
}

export default App;
