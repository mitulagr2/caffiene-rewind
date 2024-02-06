import { useAppSelector, useAppDispatch } from "../../app/hooks";
import menuInfo from "../../content/menuInfo";
import { removeFromCart, addTip } from "../../features/cart/cartSlice";
import Button from "../Button/Button";
import styles from "./CartSection.module.css";

const itemStyle = {
  border: "none",
  padding: "0",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginBottom: "32px",
  alignItems: "baseline",
};

const CartSection = () => {
  const { items, tip } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const total = Object.entries(items).reduce(
    (sum, [id, count]) =>
      (sum += menuInfo[(+id / 10) >> 0].items[+id % 10].price * count),
    0
  );

  return (
    <div className={styles.CartWrapper}>
      <p className={styles.TopText}>Your</p>
      <p className={styles.BottomText}>Cart</p>
      <ol type="I">
        {Object.entries(items).map(([id, count]) => {
          if (count < 1) return <></>;
          const item = menuInfo[(+id / 10) >> 0].items[+id % 10];
          return (
            <li key={id}>
              <Button
                style={itemStyle}
                onClick={() => dispatch(removeFromCart(+id))}
              >
                <p>{item.name}</p>
                <span>
                  {count} × ${item.price.toFixed(2)}
                </span>
              </Button>
            </li>
          );
        })}
      </ol>
      <div className={styles.BottomContainer}>
        <div className={styles.TipBox}>
          <Button
            style={{
              border: "none",
              width: "100%",
              justifyContent: "space-between",
              padding: "0",
            }}
            onClick={() => dispatch(addTip())}
          >
            <p>Tip Jar</p>
            <span>${tip.toFixed(2)}</span>
          </Button>
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
        <Button
          style={{
            rotate: "45deg",
            width: "48px",
            height: "48px",
            padding: "0",
            position: "absolute",
            right: "42px",
            bottom: "87px",
          }}
          onClick={() => {}}
        >
          <span style={{ rotate: "-45deg" }}>&#129026;</span>
          {/* &#129024; */}
        </Button>
      </div>
    </div>
  );
};

export default CartSection;
