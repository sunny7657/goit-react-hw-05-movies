import { Header } from 'components/Header/Header';
import { CastPage } from 'pages/CastPage';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { ReviewsPage } from 'pages/ReviewsPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
