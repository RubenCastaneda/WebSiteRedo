import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateForumPage = ({ setForums }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreateForum = () => {
    if (!title || !description) {
      alert("Title and description cannot be empty!");
      return;
    }
    setForums((prevForums) => [
      ...prevForums,
      { title, description, replies: [] },
    ]);
    navigate("/");
  };

  return (
    <form>
      <h2>Create New Forum</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="submit" onClick={handleCreateForum}>
        Create Forum
      </button>
    </form>
  );
};

export default CreateForumPage;
