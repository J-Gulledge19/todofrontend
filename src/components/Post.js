import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h2>{post.subject}</h2>
      </Link>
      <h3>{post.details}</h3>
    </div>
  );
};

export default Post