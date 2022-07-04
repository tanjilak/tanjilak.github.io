import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
  return(
<nav class="menu-container">

 
  

  <div class="menu">
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/designs">
          Designs
        </a>
      </li>
      <li>
        <a href="/software">
          Software
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://github.com/tanjilak" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tanjila-kabir/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/tanjiva" target="_blank" rel="noopener noreferrer">
          dribble
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;