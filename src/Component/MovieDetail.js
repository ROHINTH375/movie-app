import { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api/api";




function MovieDetail ({id}) {

    const[movie,setMovie] = useState(null);
    

    useEffect(() => {
        const getMovieDetail = async() => {
            const movieData = await fetchMovieDetail(id);
            setMovie(movieData)
        };
        getMovieDetail();
    },[id]);

    if (!movie) return<div>Loading..............</div>

    return(
        <div className="movie-detail">
            <img src={movie.Poster} alt={movie.Title} />

            <div className="movie-info">
                <h1>{movie.Title}</h1>
                <p><strong>Year:</strong>{movie.Year}</p>
                <p><strong>Genre:</strong>{movie.Genre}</p>
                <p><strong>Plot:</strong>{movie.Plot}</p>
                <p><strong>Ratings:</strong>{movie.Ratings.map(rating => (
                    <span key={rating.source}>{rating.Source}:{rating.Value}</span>
                ))}</p>
                <p><strong>Cast</strong>{movie.Actors}</p>
            </div>
        </div>
    )

}

export default MovieDetail