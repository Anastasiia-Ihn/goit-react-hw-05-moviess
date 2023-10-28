// import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieById from 'pages/MovieById';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

// const Home = lazy(() => import('../../pages/Home/Home'));
// const MoviesDetails = lazy(() =>
//   import('../../pages/MoviesDetails/MoviesDetails')
// );
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieById" element={<MovieById />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};
