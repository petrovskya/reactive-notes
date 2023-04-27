import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { ROUTE } from 'router';
import MainTemplate from 'templates';
import {
  HomePage,
  MyNotesPage,
  SharedNotesPage,
  AboutPage,
  NotFoundPage,
} from 'pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.MY_NOTES} element={<MyNotesPage />} />
      <Route path={ROUTE.SHARED_NOTES} element={<SharedNotesPage />} />
      <Route path={ROUTE.ABOUT} element={<AboutPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.ANY} element={<Navigate to={ROUTE.NOT_FOUND} />} />
    </Route>,
  ),
  { basename: '/reactive-notes' },
);
