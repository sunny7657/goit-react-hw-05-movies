import { Cast } from 'components/Cast/Cast';
import { Header } from 'components/Heaser/Header';
import { Home } from 'components/Home/Home';
import { Movie } from 'components/Movie/Movie';
import { Movies } from 'components/Movies/Movies';
import { Reviews } from 'components/Reviews/Reviews';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
