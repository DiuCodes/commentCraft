import Comment from "./Comment";
import Form from "./Form";
import { useState } from "react";
import UserCommentsList from "./UserCommentsList";

function CommentsList({
  commentsData,
  setCommentsData,
  setPopUpIsOpen,
  isOpen,
  setIsOpen,
  userReplies,
  setUserReplies,
  handleDeleteReply,
}) {
  const [input, setInput] = useState("");
  const [userComments, setUserComments] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      content: input,
      createdAt: commentsData.comments[0].createdAt,
      username: commentsData.currentUser.username,
      score: 23,
      user: {
        image: {
          png: "/images/pic.jpg",
        },
      },
      id: Math.random(),
    };

    if (!input) return;
    setUserComments([...userComments, obj]);

    setInput("");
  }

  function handleDelete(id) {
    const permission = prompt(
      "This can't be undone! Are you sure you want to Delete this comment (Yes or No)"
    );
    if (permission === "Yes" || permission === "yes")
      setUserComments(userComments.filter((comment) => comment.id !== id));
  }

  return (
    <div className="comment-list">
      <div className="scroll">
        {commentsData.comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            id={comment.id}
            replies={comment.replies}
            commentsData={commentsData}
            setCommentsData={setCommentsData}
            input={input}
            setInput={setInput}
            userComments={userComments}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setUserComments={setUserComments}
            setPopUpIsOpen={setPopUpIsOpen}
            userReplies={userReplies}
            setUserReplies={setUserReplies}
          />
        ))}

        <UserCommentsList
          userComments={userComments}
          handleDelete={handleDelete}
          userReplies={userReplies}
          setUserReplies={setUserReplies}
        />
      </div>
      <Form
        setCommentsData={setCommentsData}
        commentsData={commentsData}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CommentsList;
