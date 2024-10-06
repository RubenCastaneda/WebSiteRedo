import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const handleSignOut = () => {
    setUser(null); // Sign out the user
  };

  return (
    <header>
      <h1>Forum</h1>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <button onClick={handleSignOut}>Sign Out</button>
            <Link to="/create-forum">Create Forum</Link>
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
