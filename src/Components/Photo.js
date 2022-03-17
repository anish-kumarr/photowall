import { Link, useNavigate } from "react-router-dom";
function Photo(props) {
  const post = props.post;
  const navigate = useNavigate();
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.removePost(props.index);
            navigate("/");
          }}
        >
          Remove
        </button>
        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count">
            <img
              className="speech-bubble"
              src="https://cdn-icons-png.flaticon.com/512/589/589671.png"
              alt="Comment"
            />
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
}

export default Photo;
