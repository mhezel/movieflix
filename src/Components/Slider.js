import {useState } from "react";

export default function Slider({ movies, onSelectedMovie }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleMoviesCount = 6;
  
    const handleMovieClick = (movie) => {
      onSelectedMovie(movie.imdbID);
    };
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleMoviesCount, 0));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        Math.min(
          prevIndex + visibleMoviesCount,
          movies.length - visibleMoviesCount
        )
      );
    };
  
    return (
      <div className="sliderContainer">
        {movies.length > 0 &&
        <button
          className="btn-left"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        }
        <div className="moviesList">
          {movies
            .slice(currentIndex, currentIndex + visibleMoviesCount)
            .map((movie, index) => (
              <div
                key={index}
                className="movieItem"
                onClick={() => handleMovieClick(movie)}
              >
                <img src={movie.Poster} alt={movie.Title} />
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            ))}
        </div>
        {movies.length > 0 &&
        <button
          className="btn-right"
          onClick={handleNextClick}
          disabled={currentIndex + visibleMoviesCount >= movies.length}
        >
          →
        </button>
        }
      </div>
    );
  }