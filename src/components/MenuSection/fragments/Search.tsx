import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../../app/hooks";
import { setQuery } from "../../../features/menu/menuSlice";
import Button from "../../Button/Button";
import styles from "../MenuSection.module.css";

const Search = () => {
  const dispatch = useAppDispatch();
  const debounced = useDebouncedCallback(dispatch, 800);

  return (
    <div className={styles.Search}>
      <Button onClick={() => {}}>Search</Button>
      <input
        className={styles.QueryInput}
        onChange={(e) => debounced(setQuery(e.target.value.toLowerCase()))}
      />
    </div>
  );
};

export default Search;
