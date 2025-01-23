import { useTransition } from "react";
import Button, { ButtonProps } from "./Button";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TabButtonProps extends ButtonProps {}

const TabButton = ({ onClick, ...rest }: TabButtonProps) => {
  const [isPanning, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPanning) {
    return <p>Loading...</p>;
  }

  return <Button {...rest} onClick={handleClick} />;
};

export default TabButton;
