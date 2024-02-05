import styles from "../InfoSection.module.css";
import Button from "../../Button/Button";
import { textTabs } from "../../../content/mainInfo";
import { SetStateAction } from "react";

interface TextTabProps {
  selectedTab: number;
  setSelectedTab: React.Dispatch<SetStateAction<number>>;
}

const TextTabs = ({ selectedTab, setSelectedTab }: TextTabProps) => {
  console.log(textTabs);
  return (
    <div className={styles.TextTabs}>
      <Button
        style={{
          ...(selectedTab === 0 && { color: "red" }),
          marginTop: "-1px",
          width: "201px",
          marginLeft: "-82px",
          marginBottom: "22px",
          fontSize: "48px",
        }}
        onClick={() => setSelectedTab(() => 0)}
      >
        {textTabs[0].name}
      </Button>
      {textTabs.slice(1).map(({ name }, i) => (
        <Button
          key={i}
          style={{
            ...(selectedTab === i + 1 && { color: "red" }),
            border: "none",
            fontFamily: "'Sedgwick Ave Display', cursive",
            margin: "2px 0",
            marginLeft: "24px",
            padding: "0",
            textWrap: "nowrap",
          }}
          onClick={() => setSelectedTab(() => i + 1)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default TextTabs;
