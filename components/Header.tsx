import * as React from 'react';
import '../style.css';

export default function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.text}</h2>
        <p>{props.subText}</p>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Micro Blogger',
  subText: 'Shout into the void',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
