import Film from "../../types/Film";

export const getFavorites = async (): Promise<Film[]> => {
  const favorites = JSON.parse(localStorage.getItem("favorites") as string);
  if (favorites) return favorites;
  return [];
};
