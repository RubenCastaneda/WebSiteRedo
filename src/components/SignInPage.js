import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link

const SignInPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!username || !password) {
      alert("Please fill in both fields!");
      return;
    }
    setUser({ username });
    navigate("/");
  };

  return (
    <form>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="submit" onClick={handleSignIn}>
        Sign In
      </button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default SignInPage;
