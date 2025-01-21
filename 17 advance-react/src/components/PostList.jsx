import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched && postList.length === 0) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPost(data.posts));

    setDataFetched(true);
  }

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
