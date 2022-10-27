import * as React from 'react';
import '../style.css';

export default function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  return (
    <header style={headerStyles}>
      <div>
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Faux Micro Blogger',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
