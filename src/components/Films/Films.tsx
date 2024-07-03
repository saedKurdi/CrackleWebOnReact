import { useCallback, useEffect, useState } from "react";
import Film from "../../types/Film";
import { FilmItem } from "../Film/FilmItem";
import { FilmList } from "./styles";
import {
  getFilmsBySearch,
  getRandomMovies,
} from "../../utils/Films/getRandomFilms";
import { Header } from "../Header/Header";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  // const [isLoading, setLoading] = useState(false);
  const [filmsPressed, setFilmsPressed] = useState(true);

  useEffect(() => {
    getFilms();
  }, []);

  const setFilmFavorite = useCallback((id: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.imdbID === id ? { ...film, isFavorite: !film.isFavorite } : film
      )
    );
  }, []);

  const getFilms = async () => {
    try {
      // setLoading(true);
      const data = await getRandomMovies();
      const data2 = await getRandomMovies();
      setFilms([...data, ...data2]); // Ensure `data` is an array of Film objects
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const setFilmsWithSearch = async (search: string) => {
    // setLoading(true);
    const searchedFilms = await getFilmsBySearch(search);
    setFilms(searchedFilms);
    // setLoading(false);
  };

  const handleFilmsPressed = async () => {
    setFilmsPressed(true);
    getFilms();
  };

  return (
    <>
      <Header
        filmsPressed={handleFilmsPressed}
        setFilmsWithSearch={setFilmsWithSearch}
      />
      {filmsPressed && (
        <FilmList>
          {films.map((film) => (
            <FilmItem
              key={film.imdbID}
              film={film}
              setFilmFavorite={setFilmFavorite}
            />
          ))}
          <h1>sagol</h1>
        </FilmList>
      )}
    </>
  );
};

export default Films;
