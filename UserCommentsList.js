import UserComment from "./UserComment";

function UserCommentsList({ userComments, handleDelete }) {
  return (
    <div>
      {userComments?.map((comment) => (
        <UserComment
          comment={comment}
          key={comment.id}
          onClick={handleDelete}
        />
      ))}
    </div>
  );
}

export default UserCommentsList;
