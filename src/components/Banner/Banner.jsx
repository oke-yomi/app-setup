import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import styles from "./Banner.module.css";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(
				requests.fetchNetflixOriginals
			);
			setMovie(
				request.data.results[
					Math.floor(
						Math.random() *
							request.data.results.length -
							1
					)
				]
			);
			return request;
		};

		fetchData();
	}, []);

	console.log(movie);

	const truncate = (string, n) => {
		return string?.length > n
			? string.substr(0, n - 1) + "..."
			: string;
	};

	return (
		<header
			className={styles.banner}
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}>
			<div className={styles.banner__contents}>
				<h1 className={styles.banner__title}>
					{movie?.title ||
						movie?.name ||
						movie?.original_name}
				</h1>

				<div className={styles.banner__buttons}>
					<button className={styles.banner__button}>
						Play
					</button>
					<button className={styles.banner__button}>
						My List
					</button>
				</div>

				<h1 className={styles.banner__description}>
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className={styles.banner__fadeBottom} />
		</header>
	);
};

export default Banner;
