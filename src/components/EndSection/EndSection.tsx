import styles from "./EndSection.module.css";

const EndSection = () => {
  return (
    <div className={styles.EndWrapper}>
      <div className={styles.TopText}>
        {Array.from(Array(3).keys()).map((i) => (
          <p key={i}>BREWING MEMORIES</p>
        ))}
      </div>
      <div className={styles.UnderText}>
        {Array.from(Array(5).keys()).map((i) => (
          <p key={i}>SIP</p>
        ))}
      </div>
    </div>
  );
};

export default EndSection;
