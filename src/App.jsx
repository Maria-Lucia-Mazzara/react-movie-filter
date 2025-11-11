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
  const [filterMovies, setFilterMovies] = useState([]);
  const [Genere, setGenere] = useState('');


  useEffect(() => {
    console.log('Lista dei film:', movieSelection);
    if (!Genere) {
      setFilterMovies([...filterMovies]);
    };
    const filtrati = movieSelection.filter(movie => movie.genre === Genere);
    setFilterMovies([...filtrati]);
  }, [Genere]);




  return (
    <>
      <h1>Lista Film</h1>

      <select
        value={Genere}
        onChange={e => setGenere(e.target.value)}
      >
        <option value="">Tutti i generi</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <ul>
        {filterMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>


    </>
  )
}

export default App
