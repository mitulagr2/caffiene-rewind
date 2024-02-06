import styles from "../InfoSection.module.css";

const BestSeller = () => {
  return (
    <div className={styles.BestSeller}>
      <svg width="168" height="168" viewBox="0 0 168 168">
        <path
          id="curve"
          fill="transparent"
          d="
            M 18, 82
            a 68,68 0 1,1 136,0
            a 68,68 0 1,1 -136,0
            "
        />
        <text className={styles.TextRing} width="500">
          <textPath xlinkHref="#curve">
            READY FOR A BLAST FROM THE PAST? READY FOR A BLAST FROM THE PAST?
          </textPath>
        </text>
      </svg>
      <img src="/best_seller.png" alt="best seller"></img>
    </div>
  );
};

export default BestSeller;
