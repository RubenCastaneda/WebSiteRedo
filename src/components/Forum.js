import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Forum = ({ forums, user }) => {
  const { id } = useParams();
  const forum = forums[id];

  const [reply, setReply] = useState("");
  const [forumData, setForumData] = useState(forum); // Local forum state to track replies

  if (!forumData) {
    return <p>Forum not found!</p>;
  }

  const handleReply = () => {
    if (!reply) {
      alert("Reply cannot be empty!");
      return;
    }

    // Create a new replies array with the new reply added
    const newReplies = [
      ...forumData.replies,
      { text: reply, user: user.username },
    ];

    // Update the local forumData state
    setForumData({ ...forumData, replies: newReplies });

    // Clear the reply input
    setReply("");
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">{forumData.title}</h2>
      <p className="forum-description">{forumData.description}</p>

      <h3>Replies:</h3>
      <div className="forum-replies">
        {forumData.replies.length === 0 ? (
          <p>No replies yet. Be the first!</p>
        ) : (
          forumData.replies.map((r, index) => (
            <div className="forum-reply" key={index}>
              <p>
                {r.text} - <strong>by {r.user}</strong>
              </p>
            </div>
          ))
        )}
      </div>

      {user ? (
        <div>
          <textarea
            placeholder="Write your reply here..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <button className="submit" onClick={handleReply}>
            Submit Reply
          </button>
        </div>
      ) : (
        <p>You need to sign in to reply.</p>
      )}
    </div>
  );
};

export default Forum;
