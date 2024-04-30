import { generateMovieCards } from "./top-movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();

const searchInput = document.querySelector("#searchbox");
searchInput.focus();

const form = document.querySelector(".search");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});
