import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="title">
        <a href="/clickgame">{props.title}</a>
      </li>

      <li id="rw">{props.rightwrong}</li>

      <li id="cscor">Current Score: {props.score}</li>

      <li id="tscor">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;