import styles from "../InfoSection.module.css";
import Button from "../../Button/Button";
import { textTabs } from "../../../content/mainInfo";

const TextTabs = () => {
  console.log(textTabs);
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
        onClick={() => {
          console.log(0);
        }}
      >
        {textTabs[0].name}
      </Button>
      {textTabs.slice(1).map(({ name }, i) => (
        <Button
          key={i}
          style={{
            border: "none",
            fontFamily: "'Sedgwick Ave Display', cursive",
            margin: "2px 0",
            marginLeft: "24px",
            padding: "0",
            textWrap: "nowrap",
          }}
          onClick={() => {
            console.log(i + 1);
          }}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default TextTabs;
