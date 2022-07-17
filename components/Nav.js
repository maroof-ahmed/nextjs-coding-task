import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__item__link" href="#top">
            project
          </a>
        </li>
        <li className="nav__item">
          <a href="#top" className="nav__item__link">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
