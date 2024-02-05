import { useState } from "react";
import menuInfo from "../../content/menuInfo";
import Button from "../Button/Button";
import styles from "./MenuSection.module.css";
import MenuItem from "./fragments/MenuItem";

const MenuSection = () => {
  console.log("menu", menuInfo);
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className={styles.Wrapper}>
      <Button
        style={{
          width: "97px",
          height: "97px",
          position: "absolute",
          left: "-97px",
          top: "-97px",
        }}
        onClick={() => {}}
      >
        <img src="/cold_coffee2.png" alt="cold coffee"></img>
      </Button>
      <Button
        style={{
          position: "absolute",
          height: "60px",
          left: "-1px",
          top: "-156px",
        }}
        onClick={() => {}}
      >
        Search
      </Button>
      <div className={styles.Categories}>
        {menuInfo.map(({ type }, i) => (
          <Button
            key={i}
            style={{
              ...(selectedMenu === i && { color: "red" }),
              padding: "0",
              fontSize: "20px",
              textWrap: "nowrap",
              border: "none",
              marginBottom: "-8px",
            }}
            onClick={() => setSelectedMenu(() => i)}
          >
            {type}
          </Button>
        ))}
      </div>
      <div className={styles.Listing}>
        {menuInfo[selectedMenu].items.map((item, i) => (
          <MenuItem key={i} item={{ ...item, price: +item.price }} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
