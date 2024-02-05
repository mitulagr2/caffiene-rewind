import Button from "../../Button/Button";
import styles from "../MenuSection.module.css";

interface MenuItemProps {
  item: { name: string; price: number; desc: string };
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className={styles.MenuItem}>
      <Button
        style={{
          border: "none",
          fontFamily: "'Sedgwick Ave Display', cursive",
          padding: "0",
          textWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => {
          console.log(item);
        }}
      >
        <div>
          {item.name}
          <span className={styles.ItemPrice}>${item.price.toFixed(2)}</span>
        </div>
        <div className={styles.ItemDesc}>{item.desc}</div>
      </Button>
    </div>
  );
};

export default MenuItem;
