import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setTextTab } from "../../../features/menu/menuSlice";
import styles from "../InfoSection.module.css";
import Button from "../../Button/Button";
import { textTabs } from "../../../content/mainInfo";

const TextTabs = () => {
  console.log(textTabs);
  const curTextTab = useAppSelector((state) => state.menu.curTextTab);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.TextTabs}>
      <Button
        style={{
          ...(curTextTab === 0 && { color: "var(--color-secondary)" }),
          marginTop: "-1px",
          width: "201px",
          marginLeft: "-82px",
          marginBottom: "22px",
          fontSize: "48px",
        }}
        onClick={() => dispatch(setTextTab(0))}
      >
        {textTabs[0].name}
      </Button>
      {textTabs.slice(1).map(({ name }, i) => (
        <Button
          key={i}
          classname="clickable"
          style={{
            ...(curTextTab === i + 1 && { color: "var(--color-secondary)" }),
            border: "none",
            fontFamily: "'Sedgwick Ave Display', cursive",
            margin: "2px 0",
            marginLeft: "24px",
            padding: "0",
            textWrap: "nowrap",
            backgroundColor: "unset",
          }}
          onClick={() => dispatch(setTextTab(i + 1))}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default TextTabs;
