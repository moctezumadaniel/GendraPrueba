import { useDispatch, useSelector } from "react-redux";
import {
  loadCharacters,
  loadEpisodes,
  setPage,
} from "../../Redux/actions/content";
import { changeSearch, toggleSearchType } from "../../Redux/actions/search";
import styles from "./Navbar.module.css";

const searchTypes = {
  //DEVOLVER DESCRIPCIÓN ACTUAL
  character: "Personaje",
  episode: "Episodio",
};

const searchPlaceholders = {
  //DEVOLVER DESCRIPCIÓN DE LO QUE SE VA A BUSCAR
  character: "Buscar personaje",
  episode: "Buscar episodio",
};

const Navbar = () => {
  const searchStatus = useSelector((state) => state.search);
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const toggleType = () => {
    dispatch(toggleSearchType());
  };
  //FETCH DATA, UPDATE PAGE
  const getSearch = (e) => {
    // console.log(
    //   `https://rickandmortyapi.com/api/${searchStatus.type}/?name=${searchStatus.search}`
    // );
    e.preventDefault();
    try {
      fetch(
        `https://rickandmortyapi.com/api/${searchStatus.type}/?name=${
          searchStatus.search
        }${searchStatus.status ? `&status=${searchStatus.status}` : ""}${
          searchStatus.species ? `&species=${searchStatus.species}` : ""
        }${searchStatus.gender ? `&gender=${searchStatus.gender}` : ""}${
          searchStatus.characterType
            ? `&type=${searchStatus.characterType}`
            : ""
        }`
      )
        .then((res) => res.json())
        .then((res) => {
          if (searchStatus.type === "character") {
            dispatch(loadCharacters(res), dispatch(setPage(1)));
          }
          if (searchStatus.type === "episode") {
            dispatch(loadEpisodes(res), dispatch(setPage(1)));
          }
          // if (res.data === undefined) {
          //   dispatch(loadError(res));
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.err(err);
    }
  };

  const updateSearch = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  console.log(searchStatus, content);
  return (
    <div className={styles.NavbarContainer}>
      <button className={styles.SearchType} onClick={toggleType}>
        {searchTypes[searchStatus.type]}
      </button>
      <div className={styles.SearchContainer}>
        <input
          onChange={(e) => updateSearch(e)}
          type="search"
          className={styles.SearchBar}
          value={searchStatus.search}
          placeholder={searchPlaceholders[searchStatus.type]}
        ></input>
        <button
          className={styles.SearchButton}
          type="button"
          onClick={getSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
