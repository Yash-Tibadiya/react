import { memo } from "react";

const PostsTab = () => {
  // Log once. The actual slowdown is inside SlowPost.
  console.log("[ARTIFICIALLY SLOW] Rendering 2500 <SlowPost />");

  const items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul style={{ padding: 0, alignItems: "center" }} className="items">
      {items}
    </ul>
  );
};

const SlowPost = ({ index }: { index: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li style={{ listStyle: "none", textAlign: "center" }} className="item">
      Post #{index + 1}
    </li>
  );
};

export default memo(PostsTab);
