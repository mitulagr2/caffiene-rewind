import styles from "../InfoSection.module.css";
import Button from "../../Button/Button";

const TextTabs = () => {
  return (
    <div className={styles.TextTabs}>
      <Button
        style={{
          color: "red",
          marginTop: "-1px",
          width: "201px",
          marginLeft: "-82px",
          marginBottom: "22px",
          fontSize: "48px",
        }}
        onClick={() => {}}
      >
        Home
      </Button>
      <Button
        style={{
          border: "none",
          fontFamily: "'Sedgwick Ave Display', cursive",
          margin: "2px 0",
          marginLeft: "24px",
          padding: "0",
        }}
        onClick={() => {}}
      >
        Menu
      </Button>
      <Button
        style={{
          border: "none",
          fontFamily: "'Sedgwick Ave Display', cursive",
          margin: "2px 0",
          marginLeft: "24px",
          padding: "0",
          textWrap: "nowrap",
        }}
        onClick={() => {}}
      >
        Our brews
      </Button>
      <Button
        style={{
          border: "none",
          fontFamily: "'Sedgwick Ave Display', cursive",
          margin: "2px 0",
          marginLeft: "24px",
          padding: "0",
        }}
        onClick={() => {}}
      >
        Visit us
      </Button>
    </div>
  );
};

export default TextTabs;
