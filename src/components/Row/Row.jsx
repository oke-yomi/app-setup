import React, { useEffect, useState } from "react";
import axios from "../../axios";
import styles from "./Row.module.css";

const Row = ({
	title,
	fetchUrl,
	isLargeRow = false,
}) => {
	const [movies, setMovies] = useState([]);

	const base_url =
		"https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		};

		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	return (
		<div className={styles.row}>
			<h2 className={styles.row__title}>{title}</h2>

			<div className={styles.row__posters}>
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) &&
            (	<img
								className={`${styles.row__poster} ${
									isLargeRow &&
									styles.row__posterLarge
								}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow
										? movie.poster_path
										: movie.backdrop_path
								}`}
								alt={
									movie?.title ||
									movie?.name ||
									movie?.original_name
								}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Row;
