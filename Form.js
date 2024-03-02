function Form({ handleSubmit, setInput, input }) {
  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <img src="/images/pic.jpg" alt="comment-pic" />
      <div className="form-commnt">
        <textarea type="text" value={input} onChange={(e) => handleInput(e)} />
        <button>SEND</button>
      </div>
    </form>
  );
}

export default Form;
