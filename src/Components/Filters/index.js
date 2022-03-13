import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGender,
  changeSpecies,
  changeStatus,
  changeType,
} from "../../Redux/actions/search";
import styles from "./Filters.module.css";

const Filters = () => {
  const search = useSelector((state) => state.search);
  if (search.type === "character") {
    return <CharacterFilters />;
  } else return "";
};

const CharacterFilters = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const updateFilter = (e) => {
    switch (e.target.name) {
      case "status":
        dispatch(changeStatus(e.target.value));
        break;
      case "gender":
        dispatch(changeGender(e.target.value));
        break;
      case "species":
        dispatch(changeSpecies(e.target.value));
        break;
      case "type":
        dispatch(changeType(e.target.value));
        break;
      default:
        return;
    }
  };
  return (
    <div className={styles.FiltersContainer}>
      <FormControl className={styles.FormControl}>
        <InputLabel id="status">Estado</InputLabel>
        <Select
          labelId="status"
          id="status"
          name="status"
          label="Estado"
          onChange={updateFilter}
          value={search.status}
        >
          <MenuItem value={""}>NA</MenuItem>
          <MenuItem value={"alive"}>Vivo</MenuItem>
          <MenuItem value={"dead"}>Muerto</MenuItem>
          <MenuItem value={"unknown"}>Desconocido</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={styles.FormControl}>
        <InputLabel id="gender">Género</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          label="Género"
          name="gender"
          onChange={updateFilter}
          value={search.gender}
        >
          <MenuItem value={""}>NA</MenuItem>
          <MenuItem value={"male"}>Masculino</MenuItem>
          <MenuItem value={"female"}>Femenino</MenuItem>
          <MenuItem value={"genderless"}>Sin género</MenuItem>
          <MenuItem value={"unknown"}>Desconocido</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={styles.FormControl}>
        <TextField
          variant="outlined"
          id="species"
          label="Especie"
          name="species"
          onChange={updateFilter}
          value={search.species}
        />
      </FormControl>

      <FormControl className={styles.FormControl}>
        <TextField
          variant="outlined"
          id="type"
          label="Tipo"
          name="type"
          onChange={updateFilter}
          value={search.characterType}
        />
      </FormControl>
    </div>
  );
};

export default Filters;
