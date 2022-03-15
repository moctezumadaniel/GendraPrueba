import { Card, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./Content.module.css";
const Characters = () => {
  const characters = useSelector((state) => state.content.data);
  // console.log(characters.results);
  if (characters.results && characters.results?.length > 0) {
    return (
      <div className={styles.ResultsContainer}>
        {characters.results.map((i) => {
          return <Character data={i} />;
        })}
      </div>
    );
  } else return null;
};

export default Characters;

const Character = (props) => {
  return (
    <Card>
      <CardMedia component="img" image={props.data.image}></CardMedia>
      <div className={styles.CharacterName}>{props.data.name}</div>
      <div>
        Species: {props.data.species} - Status: {props.data.status} - location:{" "}
        {props.data.location.name}
      </div>
    </Card>
  );
};
