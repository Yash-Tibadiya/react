import { memo } from "react";

const SlowList = memo(({ text }: { text: string }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items" style={{ padding: "0" }}>{items}</ul>;
});

const SlowItem = ({ text }: { text: string }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1ms per item to emulate extremely slow rendering
  }

  return <li className="item" style={{ listStyle: "none" }}>Text: {text}</li>;
};

export default SlowList;
