import Button from "../../Button/Button";
import styles from "../InfoSection.module.css";

const BestSeller = () => {
  return (
    <div className={styles.BestSeller}>
      <svg
        className={styles.RingSVG}
        width="168"
        height="168"
        viewBox="0 0 168 168"
      >
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
      <Button
        style={{
          rotate: "45deg",
          width: "48px",
          height: "48px",
          padding: "0",
          position: "absolute",
          right: "-25px",
          top: "-25px",
          zIndex: "2",
          backgroundColor: "var(--color-highlight)",
        }}
        onClick={() => {
          (document.querySelector("#heartIcon") as HTMLElement).classList.add(
            styles["is-active"]
          );
          localStorage.liked = 1;
        }}
      >
        <div
          id="heartIcon"
          className={`${styles.HeartIcon} ${
            localStorage.liked ? styles["is-active"] : ""
          }`}
        ></div>
      </Button>
      <div className={styles.TextMask}>
        <div className={styles.ScrollText}>
          {Array.from(Array(6).keys()).map((i) => (
            <p key={i}>BEST SELLER</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
