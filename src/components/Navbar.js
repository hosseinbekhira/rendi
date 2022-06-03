import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const titles = {
  home: "الرئيسية",
  catego1: "البراعم",
  catego2: "الأشبال",
  catego3: "اليافعين",
};
const { home, catego1, catego2, catego3 } = titles;

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="list-nav">
          <li className="element">
            <Link to="/" className="target">
              {home}
            </Link>
          </li>
          <li className="element">
            <Link to="/catego1" className="target">
              {catego1}
            </Link>
          </li>
          <li className="element">
            <Link to="/catego2" className="target">
              {catego2}
            </Link>
          </li>
          <li className="element">
            <Link to="/catego3" className="target">
              {catego3}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
