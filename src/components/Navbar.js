import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-6 items-center p-5 text-base sm:text-xl font-bold font-serif text-white bg-black mb-5">
        <Link to="/">
          <p className="hover:text-gray-400">Search Books</p>
        </Link>
        <Link to="/bookshelf">
          <p className="hover:text-gray-300">My Bookshelf</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
