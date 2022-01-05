import React, { createContext, useReducer, useEffect, useState } from "react";
export const MovieContext = createContext();
const MovieContextProvider = (props) => {
	const [movies, setMovies] = useState([]);
	const [related, setRelated] = useState([]);
	const [lastPage, setLastPage] = useState(1);

	async function getMovie(movie) {
		const req = await fetch(`http://localhost:3001/api/movies/movie/${movie}`);
		const res = await req.json();
		setMovies(res.movie);
	}
	async function getMovies(page) {
		const req = await fetch(`http://localhost:3001/api/movies/movies/${page}`);
		const res = await req.json();
		setLastPage(res.last_page);
		console.log(res.last_page);
		setMovies(res.movies);
	}
	async function search(search, page) {
		const req = await fetch(
			`http://localhost:3001/api/movies/search/${search}/${page}`
		);
		const res = await req.json(page);
		setLastPage(res.last_page);
		setMovies(res.movies);
	}
	async function getRelated(movie, page) {
		const req = await fetch(
			`http://localhost:3001/api/movies/relatedmovies/${movie}`
		);
		const res = await req.json();
		setLastPage(res.last_page);
		setRelated(res.movies);
	}
	async function getByGenre(genre, page) {
		const req = await fetch(
			`http://localhost:3001/api/movies/moviesbygenre/${genre}/${page}`
		);
		const res = await req.json();
		setLastPage(res.last_page);
		setMovies(res.movies);
	}
	async function getByActor(actor, page) {
		const req = await fetch(
			`http://localhost:3001/api/movies/moviesbyactor/${actor}/${page}`
		);
		const res = await req.json();

		setLastPage(res.last_page);
		setMovies(res.movies);
	}
	const context = {
		state: { movies, related, lastPage },
		actions: {
			getMovies,
			search,
			getRelated,
			getByGenre,
			getByActor,
			getMovie,
		},
	};

	return (
		<MovieContext.Provider value={context}>
			{props.children}
		</MovieContext.Provider>
	);
};
export default MovieContextProvider;
