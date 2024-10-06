import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username || !password || !userId || !dob) {
      alert("Please fill in all fields!");
      return;
    }
    setUser({ username, userId, dob });
    navigate("/");
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <input
        type="number"
        placeholder="ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
