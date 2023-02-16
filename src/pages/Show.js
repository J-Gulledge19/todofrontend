import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid silver",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h2>{post.subject}</h2>
      <h3>{post.details}</h3>
      <div style={{ textAlign: "center" }}>
        <h4>Update a Todo</h4>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write subject here"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="write details here"
            defaultValue={post.details}
          />
          <button>Update Todo</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Todo</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;