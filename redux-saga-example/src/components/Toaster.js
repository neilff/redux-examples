import React, { PropTypes, Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Toaster extends Component {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          ...styles.toaster,
          ...children.size > 0 ? styles.visible : styles.hidden,
        }}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }>
          { children }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Toaster.propTypes = {
  children: PropTypes.node,
};

const styles = {
  toaster: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 4,
    margin: '4rem',
    transition: 'all 300ms',
    width: 240,
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
};
