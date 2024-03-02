import Reply from "./Reply";
import { useState } from "react";
import ReplyForm from "./ReplyForm";
import UserComment from "./UserComment";
import UserReplies from "./UserReplies";
import UserCommentsList from "./UserCommentsList";

function Comment({ comment, replies, remove, commentsData, input }) {
  const [repliesData, setRepliesData] = useState(replies);
  const [userReplies, setUserReplies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  return (
    <>
      <div className="comment-section">
        <div className="score">
          <img src="/images/icon-plus.svg" alt="icon +" />
          <p className="score-value">{comment.score}</p>
          <img src="/images/icon-minus.svg" alt="icon +" />
        </div>
        <div className="comment">
          <div className="align">
            <div className="user-info">
              <img
                src={`${comment.user.image.png}`}
                className="profile-pic"
                alt="profile-pic"
              />
              <div className="align-comment-name">
                <p>{comment.user.username}</p>
                <p className="time">{comment.createdAt}</p>
              </div>
            </div>
            <div className="reply">
              <img src="/images/icon-reply.svg" alt="reply icon" />
              <p onClick={() => setIsOpen((open) => !open)}>Reply</p>
            </div>
          </div>
          <p className="text">{comment.content}</p>
        </div>
      </div>
      {isOpen && (
        <ReplyForm
          repliesData={repliesData}
          setRepliesData={setRepliesData}
          commentsData={commentsData}
          input={input}
          setIsOpen={setIsOpen}
          setUserReplies={setUserReplies}
          userReplies={userReplies}
          replyInput={replyInput}
          setReplyInput={setReplyInput}
        />
      )}
      <Reply repliesData={repliesData} setRepliesData={setRepliesData} />
      <UserReplies
        userReplies={userReplies}
        setUserReplies={setUserReplies}
        replyInput={replyInput}
        setReplyInput={setReplyInput}
        comment={comment}
      />
    </>
  );
}

export default Comment;
