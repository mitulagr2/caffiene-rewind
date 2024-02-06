import styles from "./Button.module.css";

interface ButtonProps {
  style?: {};
  classname?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({
  style = {},
  classname = "",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      style={style}
      className={`${styles.Button} ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
