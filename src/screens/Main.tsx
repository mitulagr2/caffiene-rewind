import styles from "./Main.module.css";
import InfoSection from "../components/InfoSection/InfoSection";
// import MenuSection from "../components/MenuSection/MenuSection";

const Main = () => {
  console.log("main");
  return (
    <div className={styles.MainWrapper}>
      <InfoSection />
      {/* <MenuSection /> */}
    </div>
  );
};

export default Main;
