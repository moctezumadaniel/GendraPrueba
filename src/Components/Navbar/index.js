import { useDispatch, useSelector } from "react-redux";
import { toggleSearchType } from "../../Redux/actions/search";
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
  const dispatch = useDispatch();
  const toggleType = () => {
    dispatch(toggleSearchType());
  };

  const getSearch = (e) => {
    e.preventDefault();
    fetch(`https://rickandmortyapi.com/api/${searchStatus.type}`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(searchStatus);
  return (
    <div className={styles.NavbarContainer}>
      <button className={styles.SearchType} onClick={toggleType}>
        {searchTypes[searchStatus.type]}
      </button>
      <input
        onSubmit={(e) => getSearch(e)}
        type="search"
        className={styles.Search}
        placeholder={searchPlaceholders[searchStatus.type]}
      ></input>
    </div>
  );
};

export default Navbar;
