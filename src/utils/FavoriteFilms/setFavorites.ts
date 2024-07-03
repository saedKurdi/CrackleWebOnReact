import Film from "./../../types/Film";
export const setFavorites = async (film: Film) => {
  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as Film[];
  const newFavorites = [film, ...favorites];
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};
