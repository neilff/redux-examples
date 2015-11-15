import React from 'react';

const FormError = ({ isVisible, children }) => {
  const visibleStyle = isVisible ?
    styles.base : styles.hidden;

  return (
    <div style={ visibleStyle }>
      { children }
    </div>
  );
};

const styles = {
  base: {
    visibility: 'visible',
    opacity: 1,
    color: 'white',
    fontWeight: 'bold',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: 'red',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
};

export default FormError;
