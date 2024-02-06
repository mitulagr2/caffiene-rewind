import { useDebouncedCallback } from "use-debounce";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setQuery, toggleSearch } from "../../../features/menu/menuSlice";
import Button from "../../Button/Button";
import styles from "../MenuSection.module.css";

const Search = () => {
  const isActiveSearch = useAppSelector((state) => state.menu.isActiveSearch);
  const dispatch = useAppDispatch();
  const debounced = useDebouncedCallback(dispatch, 400);

  return (
    <div className={styles.Search}>
      <Button
        style={{
          ...(isActiveSearch && {
            color: "var(--color-secondary)",
          }),
        }}
        onClick={() => {
          dispatch(toggleSearch());
          document
            .querySelector("#searchInput")
            ?.classList.toggle(styles.QueryActive);
        }}
      >
        Search
      </Button>
      <input
        id="searchInput"
        className={styles.QueryInput}
        onChange={(e) => debounced(setQuery(e.target.value.toLowerCase()))}
      />
    </div>
  );
};

export default Search;
