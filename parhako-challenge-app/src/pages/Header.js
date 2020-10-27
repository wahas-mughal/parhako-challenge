import React from "react";
import {Link} from 'react-router-dom'

const Header = (props) => {
  
  const headingStyles = {
      color: '#fff'
  }
  
    return (
    <div className = 'header'>
     <Link to = "/">
     <h2 style = {headingStyles}> Pic some</h2>
     </Link>
     <Link to = "/cart">
     <h2 style = {headingStyles}> Cart Icon </h2>
     </Link>
    </div>
  );
};

export default Header;
