import UserComment from "./UserComment";

function UserReplies({
  replyInput,
  setReplyInput,
  comment,
  userReplies,
  setUserReplies,
  id,
}) {
  function handleDeleteReply(id) {
    const permission = prompt(
      "Are you sure you want to Delete this comment? This can't be undone (Yes or No)"
    );
    console.log(permission);
    if (permission === "Yes" || permission === "yes")
      setUserReplies(userReplies.filter((reply) => reply.id !== id));
  }

  return (
    <div className="userReplies">
      {userReplies?.map((reply) => (
        <UserComment
          comment={reply}
          key={reply.id}
          onClick={handleDeleteReply}
          replyInput={replyInput}
          setReplyInput={setReplyInput}
          initial={comment}
          userReplies={userReplies}
          setUserReplies={setUserReplies}
        />
      ))}
    </div>
  );
}

export default UserReplies;
