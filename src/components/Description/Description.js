import React, { useEffect } from "react";
import "./Description.css";

function Description({ movie }) {
	useEffect(() => {
		console.log(movie);
	}, []);
	return (
		<div className="description-flex">
			<div className="description-image">
				<img src={movie.fullimage} />
			</div>
			<div className="description-info">
				<h1>{movie.title}</h1>
				<p className="description-rating">IMDB : {movie.ratings}</p>
				<p>{movie.description}</p>
				<p>Released date: {movie.date}</p>
				<p>Duration: {movie.duration} min</p>
				<p>
					Genre :
					{movie.genres &&
						movie.genres.length > 0 &&
						movie.genres.map((genre, key) => (
							<>
								<span> </span>
								<a
									className="description-link"
									href={`/movies/genre/${genre.name}/1`}
									key={key}
								>
									{genre.name}
								</a>

								{key != movie.genres.length - 1 && <span>,</span>}
							</>
						))}
				</p>
				<p>
					Cast :
					{movie.actors &&
						movie.actors.length > 0 &&
						movie.actors.map((actor, key) => (
							<>
								<span> </span>
								<a
									className="description-link"
									href={`/movies/actor/${actor.name}/1`}
									key={key}
								>
									{actor.name}
								</a>

								{key != movie.actors.length - 1 && <span>,</span>}
							</>
						))}
				</p>
			</div>
		</div>
	);
}

export default Description;
