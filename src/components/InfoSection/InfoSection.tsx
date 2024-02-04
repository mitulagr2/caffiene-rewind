import styles from "./InfoSection.module.css";
import LaneReel from "./fragments/LaneReel";
import TextTabs from "./fragments/TextTabs";

const InfoSection = () => {
  console.log("info");
  return (
    <div className={styles.Wrapper}>
      <div>
        <LaneReel />
        <TextTabs />
      </div>
    </div>
  );
};

export default InfoSection;
