import styles from "./CartSection.module.css";

const CartSection = () => {
  return (
    <div className={styles.CartWrapper}>
      <p className={styles.TopText}>Your</p>
      <p className={styles.BottomText}>Cart</p>
    </div>
  );
};

export default CartSection;
