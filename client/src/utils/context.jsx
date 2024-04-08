import React, { useState, useEffect, useContext } from "react";

const API_URL = `https://api.tvmaze.com/search/shows?q=all`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data && data.length > 0) {
        setMovie(data);
        setLoading(false);
      } else {
        setError({
          show: true,
          msg: "No movies found",
        });
      }
    } catch (error) {
      console.log(error);
      setError({
        show: true,
        msg: "Error fetching data",
      });
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ movie, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
