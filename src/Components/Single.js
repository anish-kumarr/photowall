import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comment from "./Comment";

function Single(props) {
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === Number(id));
  const comments = props.comments[id] || [];
  const index = props.posts.findIndex((post) => post.id === id);
  return (
    <div className="single-photo">
      <Photo post={post} {...props} index={index} />
      <Comment addComment={props.addComment} comments={comments} id={id} />
    </div>
  );
}

export default Single;
