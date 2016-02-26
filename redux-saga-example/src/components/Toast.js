import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Toast({ message, type, onClick }) {
  const classes = classNames({
    'bg-green': type === 0,
    'bg-red': type === 1,
    'bg-orange': type === 2,
  });

  return (
    <div
      style={ styles.toast }
      className={ `${ classes } white border m1 p1 black rounded flex` }>
      <div className="flex-auto">{ message }</div>
      <div>
        <button onClick={ onClick }>x</button>
      </div>
    </div>
  );
}

Toast.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  type: PropTypes.number,
};

Toast.defaultProps = {
  onClick: () => {},
};

const styles = {
  toast: {},
};
