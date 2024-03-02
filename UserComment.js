import { useState } from "react";

function UserComment({
  comment,
  onClick,
  replyInput,
  setReplyInput,
  initial,
  userReplies,
  setUserReplies,
}) {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [update, setUpdate] = useState(comment.content);

  function openEdit() {
    setUpdateOpen(true);
  }

  function handleUpdate(e) {
    setUpdate(e.target.value);
  }

  function submitUpdate(e) {
    e.preventDefault();
    comment.content = update;

    setUpdateOpen(false);
  }

  return (
    <div className="comment-section">
      <div className="score">
        <img src="/images/icon-plus.svg" alt="icon +" />
        <p className="score-value">{comment.score}</p>
        <img src="/images/icon-minus.svg" alt="icon +" />
      </div>
      <div className="comment">
        <div className="align-user">
          <div className="user-info user">
            <img
              src={`${comment.user.image.png}`}
              className="profile-pic"
              alt="profile-pic"
            />
            <p>{comment.username}</p>
            <p className="you">you</p>
            <p className="time">{comment.createdAt}</p>
          </div>
          <div className="actions">
            <div>
              <img src="/images/icon-delete.svg" alt="icon" />
              <p onClick={() => onClick(comment.id)}>Delete</p>
            </div>
            <div>
              <img src="/images/icon-edit.svg" alt="icon" />
              <p onClick={openEdit}>Edit</p>
            </div>
          </div>
        </div>

        {updateOpen ? (
          <form className="update-form" onSubmit={submitUpdate}>
            <div className="form-commnt">
              <textarea
                type="text"
                className="update-input"
                value={update}
                onChange={(e) => handleUpdate(e)}
              />
              <button className="btn-update">Update</button>
            </div>
          </form>
        ) : (
          <p className="text">{comment.content}</p>
        )}
      </div>
    </div>
  );
}

export default UserComment;
