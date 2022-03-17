function Comment(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    props.addComment(comment, props.id);
  }
  return (
    <div className="comment">
      {props.comments.map((comment, index) => {
        return (
          <p class="text" key={index}>
            {comment}
          </p>
        );
      })}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Comment" name="comment" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Comment;
