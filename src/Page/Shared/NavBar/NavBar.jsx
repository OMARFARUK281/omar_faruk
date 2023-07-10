import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <div className="navbar bg-stone-500 mb-2 rounded">
        <div className="navbar-start">
          <div className="dropdown">          
          </div>
          <div className="ps-12 w-48">
          <h2 className="normal-case text-xl bg-red-200 text-center rounded-xl"> <Link to="/">Omar Faruk</Link></h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 text-xl font-bold">
            <li><Link to="about">About</Link></li>
            <li><a>Project</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end mr-8">
          <button className="btn text-sm bg-orange-600 text-white">DOWNLOAD RESUME</button>
        </div>
      </div>
  );
};

export default NavBar;
