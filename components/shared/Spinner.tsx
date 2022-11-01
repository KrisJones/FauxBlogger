import * as React from 'react';

function Spinner() {
  return (
    <img
      src={'../assets/spinner.gif'}
      alt="Loading..."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
