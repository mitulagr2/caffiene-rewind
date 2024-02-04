import Button from "../Button/Button";
import styles from "./InfoSection.module.css";
import BestSeller from "./fragments/BestSeller";
import LaneReel from "./fragments/LaneReel";
import TextTabs from "./fragments/TextTabs";

const InfoSection = () => {
  console.log("info");
  return (
    <>
      <div className={styles.Wrapper}>
        <div>
          <LaneReel />
          <TextTabs />
        </div>
        <div className={styles.Vertical_Desc}>
          <Button
            style={{
              padding: "0",
              width: "97px",
              height: "97px",
              rotate: "180deg",
            }}
            onClick={() => {}}
          >
            <img src="/hot_coffee.png" alt="hot coffee"></img>
          </Button>
          Retro Cafe
        </div>
        <div className={styles.InfoTextWrapper}>
          <div className={styles.Banner}>
            <div className={styles.Line}></div>
            <Button
              style={{
                padding: "0",
                width: "97px",
                height: "97px",
                marginLeft: "-1px",
                marginTop: "-1px",
              }}
              onClick={() => {}}
            >
              <img src="/cold_coffee1.png" alt="cold coffee"></img>
            </Button>
            <div>
              <div className={styles.Title}>Caffiene Rewind</div>
              <div className={styles.Subtitle}>
                Where every cup is a trip down memory lane.
              </div>
            </div>
          </div>
          <div className={styles.InfoText}>
            <div>
              Welcome to Caffeine Rewind, where every sip takes you back in
              time! We blend the warmth of nostalgia with the finest coffee
              beans to create timeless classics and unforgettable experiences.
              Add cursor pointer.
            </div>
          </div>
          <BestSeller />
        </div>
        <div className={styles.OrderText}>Order</div>
      </div>
      <Button
        style={{
          padding: "0 8px",
          width: "97px",
          height: "97px",
          position: "absolute",
          left: "1655px",
          top: "-1px",
        }}
        onClick={() => {}}
      >
        <img src="/noodles.png" alt="noodles"></img>
      </Button>
    </>
  );
};

export default InfoSection;
