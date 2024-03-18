import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="favorites" element={<FavoritesPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
