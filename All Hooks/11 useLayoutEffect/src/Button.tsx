export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
}

const Button = ({ disabled, onClick, title }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
