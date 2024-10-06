import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import CreateForumPage from "./components/CreateForumPage";
import Forum from "./components/Forum";
import "./styles.css"; // Make sure the styles are imported here

function App() {
  const [user, setUser] = useState(null); // Authenticated user state
  const [forums, setForums] = useState([]); // Forums state

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage forums={forums} />} />
        <Route path="/signin" element={<SignInPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        {user && (
          <Route
            path="/create-forum"
            element={<CreateForumPage setForums={setForums} />}
          />
        )}
        <Route
          path="/forum/:id"
          element={<Forum forums={forums} user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
