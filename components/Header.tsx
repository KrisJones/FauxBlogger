import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>{props.text}</h2>
        </Link>
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
