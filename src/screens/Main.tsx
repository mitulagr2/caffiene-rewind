import styles from "./Main.module.css";
import InfoSection from "../components/InfoSection/InfoSection";
import MenuSection from "../components/MenuSection/MenuSection";
import CartSection from "../components/CartSection/CartSection";
import EndSection from "../components/EndSection/EndSection";

const Main = () => {
  console.log("main");
  return (
    <div className={styles.MainWrapper}>
      <InfoSection />
      <MenuSection />
      <CartSection />
      <EndSection />
    </div>
  );
};

export default Main;
