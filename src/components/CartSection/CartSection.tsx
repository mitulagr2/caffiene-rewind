import { useState } from "react";
import styles from "./CartSection.module.css";
import Checkout from "./fragments/Checkout";
import List from "./fragments/List";
import Button from "../Button/Button";

const CartSection = () => {
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <div className={styles.CartWrapper}>
      <List />
      <Checkout />
      <Button
        style={{
          rotate: "45deg",
          width: "48px",
          height: "48px",
          padding: "0",
          position: "absolute",
          right: "42px",
          ...(isCheckout && {
            right: "380px",
          }),
          bottom: "87px",
          transition: "right 2s",
        }}
        onClick={() => {
          setIsCheckout(!isCheckout);
          Array.from(document.querySelectorAll(".cartSection")).forEach(
            (section) => section.classList.toggle(styles.FullWidth)
          );
        }}
      >
        <span style={{ rotate: "-45deg" }}>
          {isCheckout ? <>&#129024;</> : <>&#129026;</>}
        </span>
      </Button>
    </div>
  );
};

export default CartSection;
