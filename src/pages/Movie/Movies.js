import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import { MovieContext } from "../../contexts/MovieContext";
import "../../components/Recommend/Recommend.css";
import "./Movies.css";
import Description from "../../components/Description/Description";
function Movies() {
	const { movie } = useParams();
	const [url, setUrl] = useState("");
	const {
		state: { movies, related },
		actions: { getMovie, getRelated },
	} = useContext(MovieContext);
	useEffect(async () => {
		await getMovie(movie);
		if (movies) {
			await getRelated(movie);
		}
	}, []);
	useEffect(() => {
		if (movies)
			console
				.log
				// document.querySelector("#vplayer").childNodes[1].childNodes[2]
				// 	.childNodes[1].src
				();
		let x = document.querySelector(".hidden");
		console.log(x);
		if (x) {
			x.style.border = 0;
		}
	}, [movies]);

	if (movies) {
		return (
			<div>
				<div className="video-frame">
					<iframe
						src={url ? url : movies.videourl}
						frameborder="0"
						webkit-playsinline=""
						playsinline=""
						preload="auto"
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture "
						allowfullscreen=""
					/>
				</div>
				<Description movie={movies} />
				<div className="rec">
					<h2 className="rec-title">Related Movies</h2>

					<div class="rec-clearfix"></div>
				</div>
				<div className="rec-content">
					<div className="rec-content-filmlist">
						{related.length > 0 &&
							related.map((mov, key) => <Card key={key} movie={mov}></Card>)}
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

export default Movies;
