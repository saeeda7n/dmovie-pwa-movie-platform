import axios from "axios";

const movieDbClient = axios.create({
 baseURL: "https://api.themoviedb.org/3/",
});
movieDbClient.defaults.headers["Authorization"] =
 `Bearer ${process.env.MOVIE_DB_API}`;
movieDbClient.defaults.headers["Content-Type"] = "application/json";
export { movieDbClient };
