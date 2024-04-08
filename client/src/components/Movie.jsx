import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import "../css/Movie.css";

const Movie = () => {
  const { movie } = useGlobalContext();

  return (
    <div className="card-container">
      {movie.map((currMovie) => {
        const { name, id } = currMovie.show;
        const original = currMovie.show.image?.original;
        const image = currMovie.show;
        return (
          <NavLink to={`movie/${id}`} key={id}>
            <div className="card">
              <div className="card-info">
                <h2>{name}</h2>
                {image === null ? (
                  <img src="../assets/images/Blank.png" alt="Poster_Img" />
                ) : (
                  original && <img src={original} alt="Poster_Img" />
                )}
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Movie;
