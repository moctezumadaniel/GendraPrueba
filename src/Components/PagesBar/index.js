import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCharacters,
  loadEpisodes,
  setPage,
} from "../../Redux/actions/content";
import styles from "./PagesBar.module.css";
const PagesBar = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const currentUrl = content?.data?.info?.next
    ? content.data.info.next
    : content?.data?.info?.prev
    ? content.data.info.prev
    : "";

  //FETCH DATA, UPDATE PAGE
  const handlePageChange = (e, value) => {
    const urlToFetch = currentUrl.replace(/page=[0-9]+/g, `page=${value}`);
    if (!urlToFetch) return;
    window.scrollTo(0, 0);
    dispatch(setPage(value));
    try {
      fetch(urlToFetch)
        .then((res) => res.json())
        .then((res) => {
          if (urlToFetch.match(/character/g)) {
            dispatch(loadCharacters(res));
          }
          if (urlToFetch.match(/episode/g)) {
            dispatch(loadEpisodes(res));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.err(err);
    }
  };

  if (
    content?.data &&
    content?.data?.results?.length > 0 &&
    content?.data?.info?.pages > 1
  ) {
    return (
      <div className={styles.PagesContainer}>
        <Pagination
          count={content.data.info.pages}
          onChange={handlePageChange}
          defaultPage={1}
          page={content.page}
        />
      </div>
    );
  } else return null;
};

export default PagesBar;
