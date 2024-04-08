import "../css/Details.css";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie Details {id}</h1>
    </div>
  );
};

export default Details;
