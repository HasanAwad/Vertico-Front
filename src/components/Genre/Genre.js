import React, { useState, useContext, useEffect } from "react";
import Card from "../Card/Card";
import { MovieContext } from "../../contexts/MovieContext";
import "./../Recommend/Recommend.css";
import { useParams } from "react-router-dom";
export default function Genre(props) {
	const { genretext, page } = useParams();
	const {
		state: { lastPage, movies },
		actions: { getByGenre },
	} = useContext(MovieContext);
	useEffect(async () => {
		await getByGenre(genretext, page);
	}, [page]);
	return (
		<div>
			<div className="rec">
				<h2 className="rec-title">Genre: {genretext}</h2>
				<div className="rec-tabs">
					<span className="rec-active" data-name="movies">
						<i className="fa fa-play-circle"></i> Movies
					</span>
					<span data-name="shows">
						<i class="fa fa-list"></i> TV Shows
					</span>
					<span data-name="trending">
						<i class="fa fa-chart-line"></i> Trending
					</span>
				</div>
				<div class="rec-clearfix"></div>
			</div>

			<div className="rec-content">
				<div className="rec-content-filmlist">
					{movies.length > 0 &&
						movies.map((movie, key) => <Card key={key} movie={movie}></Card>)}
				</div>
				{movies.length > 0 && lastPage > 1 && (
					<div className="pagenav">
						<ul className="pagination">
							{lastPage >= 1 && page > 1 && (
								<li>
									<a href="/movies/1" rel="prev">
										«
									</a>
								</li>
							)}
							{lastPage >= 1 && page == 1 ? (
								<li className="active">
									<a>1</a>
								</li>
							) : lastPage >= 1 && page != lastPage ? (
								<li>
									<a href={`/movies/${page - 1}`}>{page - 1}</a>
								</li>
							) : (
								lastPage >= 1 && (
									<li>
										<a href={`/movies/${page - 2}`}>{page - 2}</a>
									</li>
								)
							)}
							{lastPage >= 2 && page >= 2 && page <= lastPage - 1 ? (
								<li className="active">
									<a>{page}</a>
								</li>
							) : lastPage >= 2 && page < 2 ? (
								<li>
									<a href={`/movies/2`}>2</a>
								</li>
							) : (
								lastPage >= 2 && (
									<li>
										<a href={`/movies/${lastPage - 1}`}>{lastPage - 1}</a>
									</li>
								)
							)}

							{lastPage >= 3 && page == lastPage ? (
								<li className="active">
									<a>{page}</a>
								</li>
							) : lastPage >= 3 && page == 1 ? (
								<li>
									<a href={`/movies/${parseInt(page) + 2}`}>
										{parseInt(page) + 2}
									</a>
								</li>
							) : (
								lastPage >= 3 && (
									<li>
										<a href={`/movies/${parseInt(page) + 1}`}>
											{parseInt(page) + 1}
										</a>
									</li>
								)
							)}
							{lastPage >= 4 && page < lastPage && (
								<li>
									<a href={`/movies/${lastPage}`} rel="prev">
										»
									</a>
								</li>
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
