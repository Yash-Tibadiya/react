// import { useContext } from "react";
// import { useRef } from "react";
// import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   tagsElement.current.value = "";
  // };

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you felling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your hashtags using space..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
