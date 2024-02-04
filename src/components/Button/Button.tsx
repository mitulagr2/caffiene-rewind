import styles from "./Button.module.css";

interface ButtonProps {
  style?: {};
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ style = {}, onClick, children }: ButtonProps) => {
  return (
    <button style={style} className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
