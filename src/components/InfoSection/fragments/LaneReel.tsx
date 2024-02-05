import styles from "../InfoSection.module.css";

const LaneReel = () => {
  return (
    <div className={styles.LaneReel}>
      <div>
        {Array.from(Array(8).keys()).map((i) => (
          <p key={i}>Lane</p>
        ))}
      </div>
    </div>
  );
};

export default LaneReel;
