import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
	params: {
		api_key: "api_key=87e5ec7837951afdec6a5a495b8670b2",
	},
});

export default api;
