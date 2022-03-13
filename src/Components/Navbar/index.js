import { useDispatch, useSelector } from "react-redux";
import { loadContent } from "../../Redux/actions/content";
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

  const getSearch = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    console.log(
      `https://rickandmortyapi.com/api/${searchStatus.type}/?name=${searchStatus.search}`
    );
    e.preventDefault();
    fetch(
      `https://rickandmortyapi.com/api/${searchStatus.type}/?name=${searchStatus.search}`
    )
      .then((res) => res.json())
      .then((res) => dispatch(loadContent(res)))
      .catch((err) => console.log(err));
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
      <input
        onChange={(e) => updateSearch(e)}
        onKeyUp={getSearch}
        type="search"
        value={searchStatus.search}
        className={styles.Search}
        placeholder={searchPlaceholders[searchStatus.type]}
      ></input>
    </div>
  );
};

export default Navbar;
