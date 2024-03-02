import Comment from "./Comment";
function Reply({ repliesData, setRepliesData }) {
  return (
    <div className="reply-section">
      {repliesData?.map((reply) => (
        <Comment
          comment={reply}
          key={reply.id}
          setRepliesData={setRepliesData}
        />
      ))}
    </div>
  );
}

export default Reply;
