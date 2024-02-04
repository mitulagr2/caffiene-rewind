import styles from "../InfoSection.module.css";

const LaneReel = () => {
  return (
    <div className={styles.LaneReel}>
      {Array.from(Array(6).keys()).map((i) => (
        <p key={i}>Lane</p>
      ))}
    </div>
  );
};

export default LaneReel;
