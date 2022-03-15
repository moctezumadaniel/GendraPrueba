import { useSelector } from "react-redux";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Error from "./Error";

const pages = {
  character: <Characters />,
  episode: <Episodes />,
  error: <Error />,
  "": null,
};

const Content = () => {
  const content = useSelector((state) => state.content);
  return pages[content.contentType];
};

export default Content;
