import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container px-12 py-6 text-white bg-mid-950 flex justify-between items-center">
        <div>
          <h2>Logo</h2>
        </div>

        <ul className="flex items-center gap-3">
          <li>
            <Link>Browse Startups</Link>
          </li>
          <li>
            <Link>Seek funding</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="bg-cyan-400 px-5 py-1 rounded">Login</button>
          <button className="bg-cyan-400 px-5 py-1 rounded">Sing Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
