import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import menuInfo from "../../../content/menuInfo";
import { removeFromCart, addTip } from "../../../features/cart/cartSlice";
import Button from "../../Button/Button";
import styles from "../CartSection.module.css";

const itemStyle = {
  border: "none",
  padding: "0",
  marginBottom: "32px",
  backgroundColor: "unset",
};

const List = () => {
  const { items, tip } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const total = Object.entries(items).reduce(
    (sum, [id, count]) =>
      (sum += menuInfo[(+id / 10) >> 0].items[+id % 10].price * count),
    0
  );

  return (
    <div className={`cartSection ${styles.ListWrapper} ${styles.FullWidth}`}>
      <p className={styles.TopText}>Your</p>
      <p className={styles.BottomText}>Cart</p>
      <ol type="I">
        {Object.entries(items).map(([id, count]) => {
          if (count < 1) return <></>;
          const item = menuInfo[(+id / 10) >> 0].items[+id % 10];
          return (
            <li key={id}>
              <div className={styles.Item}>
                <Button
                  classname="clickable"
                  style={itemStyle}
                  onClick={() => dispatch(removeFromCart(+id))}
                >
                  <p>{item.name}</p>
                </Button>
                <span>
                  {count} × ${item.price.toFixed(2)}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
      <div className={styles.BottomContainer}>
        <div className={styles.TipBox}>
          <div className={styles.TipTitle}>
            <Button
              classname="clickable"
              style={{
                border: "none",
                padding: "0",
                backgroundColor: "unset",
              }}
              onClick={() => dispatch(addTip())}
            >
              <p>Tip Jar</p>
            </Button>
            <span>${tip.toFixed(2)}</span>
          </div>
          <div className={styles.TipText}>
            Pull up a chair, take a sip, and let the Caffeine Rewind experience
            begin!
          </div>
        </div>

        <div className={styles.TotalBox}>
          <div className={styles.TotalText}>Total</div>
          <div className={styles.Line}></div>
          <div>${(total + tip).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default List;
