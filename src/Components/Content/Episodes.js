import { useSelector } from "react-redux";
import { Card } from "@mui/material";
import styles from "./Content.module.css";

const Episodes = () => {
  const episodes = useSelector((state) => state.content.data);
  if (episodes.results && episodes.results?.length > 0) {
    return (
      <div className={styles.ResultsContainer}>
        {episodes.results.map((i) => {
          return <Episode data={i} key={i.id} />;
        })}
      </div>
    );
  } else return null;
};

export default Episodes;

const Episode = (props) => {
  return (
    <Card className={styles.Episode}>
      <div className={styles.CharacterName}>{props.data.name}</div>
      <div>
        {props.data.episode} - {props.data.air_date}
      </div>
    </Card>
  );
};
