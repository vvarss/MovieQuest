// import { useEffect } from 'react';
// import './App.css';
// import MovieCard  from './MovieCard';
// <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" alt="search" onClick={() => searchMovies(searchTerm)} />
// const API_URL = 'http://www.omdbapi.com?apikey=cc508be0';

// const movie1 = {
//     "Title" : "Amazing Spiderman Syndrome",
//     "Year"  : "2012",
//     "imdbID" : "tt2586634",
//     "Type" : "movie",
//     "Poster" : "N/A"
// }
// const App = () => {
//   const [movies,setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   useEffect(() => {
//     searchMovies('Spiderman');
//   }, []);

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>
//       <div className="search">
//         <input placeholder="Search for movies" value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
//         <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
//       </div>
//       {
//         movies?.length > 0
//         ? (
//             <div className="container">
//                 {movies.map(movie) => (
//                     <MovieCard movie={movie} />
//                 )}
                
//             </div>
//         ) : (
//             <div className="empty">
//             <h2>No movies found</h2>
//             </div>
//         )
//       }
//       <div className="container">
//           <MovieCard movie1 = {movies[0]} />
//     </div>
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=cc508be0';

const SearchIcon = "https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); 
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieQuest</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
