import React, { memo } from "react";
import Film from "../../types/Film";
import { FilmContainer } from "./styles";
import { Star } from "../../UI/Star";
interface Props {
  film: Film;
  setFilmFavorite: (id: string) => void;
}
export const FilmItem: React.FC<Props> = memo(({ film, setFilmFavorite }) => {
  console.log("item");
  return (
    <FilmContainer>
      <Star
        className="fa-solid fa-star"
        style={{
          color: film.isFavorite ? "yellow" : "black",
        }}
        onClick={async () => {
          setFilmFavorite(film.imdbID);
        }}
      ></Star>
      <img
        src={
          film.Poster.length < 7
            ? "data:image/jpeg;base64,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"
            : film.Poster
        }
        alt={film.Title}
      />
    </FilmContainer>
  );
});
