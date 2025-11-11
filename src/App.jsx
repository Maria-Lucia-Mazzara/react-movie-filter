import { useEffect, useState } from 'react'


function App() {
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [movieSelection, setMovieSelection] = useState(movies);

  useEffect(() => {
    console.log('Lista dei film:', movieSelection);
  }, []);

  return (
    <>
      <h1>Lista Film</h1>
      <ul>
        {movieSelection.map((movie, index) => (
          <li key={index}>{movie.title} - {movie.genre}</li>
        ))}
      </ul>
    </>
  )
}

export default App
