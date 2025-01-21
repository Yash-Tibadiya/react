import { useReducer, createContext, use } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "NEW_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        tags: tags,
        reactions: {
          likes: 0,
          dislikes: 0,
        },
        views: 0,
        userId: userId,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
      // value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi I am going to Mumbai. I am going to spend some time there. I am going to eat some food. I am going to sleep.",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//     reactions: {
//       likes: 21,
//       dislikes: 10,
//     },
//     views: 305,
//     userId: "user-9",
//   },
//   {
//     id: "2",
//     title: "Pass Hogaya bhai",
//     body: "4 saal ki masti ke bad bhi pass hogaya bhai. Hard to believe.",
//     tags: ["Graduating", "Unbelievable"],
//     reactions: {
//       likes: 221,
//       dislikes: 110,
//     },
//     views: 3035,
//     userId: "user-12",
//   },
// ];

export default PostListProvider;
