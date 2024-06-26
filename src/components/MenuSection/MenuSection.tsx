import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setFoodTab } from "../../features/menu/menuSlice";
import menuInfo from "../../content/menuInfo";
import Button from "../Button/Button";
import styles from "./MenuSection.module.css";
import MenuItem from "./fragments/MenuItem";
import Search from "./fragments/Search";

const MenuSection = () => {
  const { curFoodTab, query, isActiveSearch } = useAppSelector(
    (state) => state.menu
  );
  const dispatch = useAppDispatch();

  const filtered = query
    ? menuInfo.reduce(
        (list, { items }) => [
          ...list,
          ...items.filter(({ name, desc }) =>
            (name + desc).toLowerCase().includes(query)
          ),
        ],
        [] as {
          name: string;
          price: number;
          desc: string;
        }[]
      )
    : [];
  const items =
    query && filtered.length > 0 ? filtered : menuInfo[curFoodTab].items;

  return (
    <div className={styles.Wrapper}>
      <Button
        style={{
          width: "97px",
          height: "97px",
          position: "absolute",
          left: "-97px",
          top: "-97px",
          backgroundColor: "unset",
        }}
        onClick={() => dispatch(setFoodTab(1))}
      >
        <img src="/cold_coffee2.png" alt="cold coffee"></img>
      </Button>
      <Search />
      <div className={styles.Categories}>
        {menuInfo.map(({ type }, i) => (
          <Button
            key={i}
            classname="clickable"
            style={{
              ...((!isActiveSearch || filtered.length < 1) &&
                curFoodTab === i && { color: "var(--color-secondary)" }),
              padding: "0",
              fontSize: "20px",
              textWrap: "nowrap",
              border: "none",
              marginBottom: "-8px",
              backgroundColor: "unset",
            }}
            onClick={() => dispatch(setFoodTab(i))}
          >
            {type}
          </Button>
        ))}
      </div>
      <div className={styles.Listing}>
        {items.map((item, i) => (
          <MenuItem
            key={i}
            item={{ ...item, id: query ? i : curFoodTab * 10 + i }}
          />
        ))}
      </div>
      <div className={styles.box}></div>
      <img src="/favicon.svg" alt="favicon" className={styles.logo}></img>
      <div className={styles.Line}></div>
    </div>
  );
};

export default MenuSection;
