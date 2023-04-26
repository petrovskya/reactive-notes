import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { ROUTE } from 'router';
import { MainTemplate } from 'templates';
import {
  HomeContainer,
  MyNotesContainer,
  SharedNotesContainer,
  AboutContainer,
  NotFoundContainer,
} from 'pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomeContainer />} />
      <Route path={ROUTE.MY_NOTES} element={<MyNotesContainer />} />
      <Route path={ROUTE.SHARED_NOTES} element={<SharedNotesContainer />} />
      <Route path={ROUTE.ABOUT} element={<AboutContainer />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundContainer />} />
    </Route>,
  ),
  { basename: '/reactive-notes' },
);
