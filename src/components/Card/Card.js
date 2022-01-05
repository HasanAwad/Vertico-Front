import React from "react";
import "./Card.css";
import { FaPlay } from "react-icons/fa";
function Card({ movie }) {
	return (
		<div
			className="card"
			data-tip="300x2?/cache321d6c"
			onClick={() => {
				window.location.pathname = `/movies/watch/${movie._id}`;
			}}
		>
			<div className="card-icons">
				<div className="card-icons-quality">HD</div>
			</div>
			<a title={movie.title} className="card-poster">
				<img src={movie.fullimage} />
				<div className="card-poster-play">
					<FaPlay />
				</div>
			</a>
			{/* <span class="card-imdb">
				<i class="fa fa-star"></i> 6.40
			</span> */}
			<h3>
				<a className="card-title" title={movie.title}>
					{movie.title}
				</a>
			</h3>
			<div className="card-meta">
				{movie.date.slice(0, 4)} <i className="card-meta-dot"></i>{" "}
				{movie.duration}
				{" min"}
				<i className="card-meta-type">Movie</i>
			</div>
		</div>
	);
}

export default Card;
