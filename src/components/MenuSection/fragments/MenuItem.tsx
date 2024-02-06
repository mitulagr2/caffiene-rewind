import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../../features/cart/cartSlice";
import Button from "../../Button/Button";
import styles from "../MenuSection.module.css";

interface MenuItemProps {
  item: { id: number; name: string; price: number; desc: string };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const dispatch = useAppDispatch();

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
          dispatch(addToCart(item.id));
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
