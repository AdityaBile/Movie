import { useGlobalContext } from "../utils/context";

const Movie = () => {
  const { movie } = useGlobalContext();

  return (
    <>
      {movie.map((currMovie) => (
        <div key={currMovie.show.id}>
          <h2>Movie : {currMovie.show.name}</h2>
          <h4>Score : {currMovie.score}</h4>
        </div>
      ))}
    </>
  );
};

export default Movie;
