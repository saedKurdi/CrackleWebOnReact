// import { Film } from "../../types/Film";
import axios from "axios";
import Film from "../../types/Film";

// Function to generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

// Array of search terms (genres and categories)
const searchTerms: string[] = [
  "adventure",
  "action",
  "comedy",
  "drama",
  "thriller",
  "fantasy",
  "sci-fi",
  "romance",
  "horror",
  "mystery",
  "animation",
  "documentary",
  "musical",
  "crime",
  "family",
  "war",
  "western",
  "history",
  "sport",
  "biography",
];

// Function to fetch movies based on a random search term
export async function getRandomMovies(): Promise<Film[]> {
  try {
    // Select a random search term from the array
    const randomIndex = getRandomInt(0, searchTerms.length);
    const searchTerm = searchTerms[randomIndex];

    // Make a request to the OMDB API using Axios
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "ddb5ca6f",
        s: searchTerm,
        type: "movie",
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
  return [];
}

export async function getFilmsBySearch(search: string): Promise<Film[]> {
  const films: Film[] = [];
  try {
    let page = 0;
    // Getting 30 films whith for loop :
    for (let i = 0; i < 3; i++) {
      // Make a request to the OMDB API using Axios
      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "ddb5ca6f",
          s: search,
          type: "movie",
          page: ++page,
        },
      });
      console.log(response.data.Search);
      for (let k = 0; k < response.data.Search.length; k++) {
        films.unshift(response.data.Search[k]);
      }
    }
    return films;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
  return [];
}
