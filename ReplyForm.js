import { useState } from "react";
import UserComment from "./UserComment";
import UserReplies from "./UserReplies";

function ReplyForm({
  repliesData,
  setIsOpen,
  setUserReplies,
  userReplies,
  replyInput,
  setReplyInput,
}) {
  function handleReply(e) {
    setReplyInput(e.target.value);
  }

  function handleReplySubMit(e) {
    e.preventDefault();

    const obj = {
      content: replyInput,
      createdAt: "1s ago",
      username: "Diu Gach",
      score: 23,
      user: {
        image: {
          png: "./images/pic.jpg",
        },
      },
      id: Math.random(),
    };

    if (!replyInput) return;

    setUserReplies([...userReplies, obj]);
    // setRepliesData([...repliesData, obj]);
    setReplyInput("");
    setIsOpen(false);
  }

  return (
    <div>
      <form className="form form-reply" onSubmit={(e) => handleReplySubMit(e)}>
        <img src="/images/pic.jpg" alt="comment-pic" />
        <div className="form-commnt">
          <textarea
            type="text"
            value={replyInput}
            onChange={(e) => handleReply(e)}
          />
          <button>Reply</button>
        </div>
      </form>
    </div>
  );
}

export default ReplyForm;
