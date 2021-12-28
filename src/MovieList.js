import { Button } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { Movie } from './Movie';

export function MovieList({ movieList, setMovieList }) {
  return (
    <div className='movie-container'>
      {movieList.map(({ name, poster, rating, summary }, index) => <Movie deletButton={<Button className='delete' color='error'
        onClick={() => {
          const deleteIndex = index;
          const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
          setMovieList(remainingMovies);
        }}><DeleteForeverTwoToneIcon /></Button>}
        name={name} poster={poster} rating={rating} summary={summary} />)}
    </div>
  );
}
