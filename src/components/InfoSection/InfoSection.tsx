import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setFoodTab } from "../../features/menu/menuSlice";
import mainInfo from "../../content/mainInfo";
import Button from "../Button/Button";
import styles from "./InfoSection.module.css";
import BestSeller from "./fragments/BestSeller";
import LaneReel from "./fragments/LaneReel";
import TextTabs from "./fragments/TextTabs";

const InfoSection = () => {
  const curTextTab = useAppSelector((state) => state.menu.curTextTab);
  const dispatch = useAppDispatch();

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
              backgroundColor: "unset",
            }}
            onClick={() => dispatch(setFoodTab(0))}
          >
            <img src="/hot_coffee.png" alt="hot coffee"></img>
          </Button>
          Retro Cafe
        </div>
        <div>
          <div className={styles.Banner}>
            <div className={styles.Line}></div>
            <Button
              style={{
                padding: "0",
                width: "97px",
                height: "97px",
                marginLeft: "-1px",
                marginTop: "-1px",
                backgroundColor: "unset",
              }}
              onClick={() => dispatch(setFoodTab(1))}
            >
              <img src="/cold_coffee1.png" alt="cold coffee"></img>
            </Button>
            <div>
              <div className={styles.Title}>{mainInfo.title}</div>
              <div className={styles.Subtitle}>{mainInfo.subtitle}</div>
            </div>
          </div>
          <div className={styles.InfoText}>
            <div>{mainInfo.textTabs[curTextTab].text}</div>
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
          backgroundColor: "unset",
        }}
        onClick={() => dispatch(setFoodTab(2))}
      >
        <img src="/noodles.png" alt="noodles"></img>
      </Button>
    </>
  );
};

export default InfoSection;
