import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import NewsPageView          from 'views/NewsPageView';
import LoginView          from 'views/LoginView';
import NotFoundView from 'views/NotFoundView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='about' component={AboutView} />
    <Route path='login' component={LoginView} />
    <Route path='news/:id' component={NewsPageView} />
    <Route path='*' component={NotFoundView} />
  </Route>
);
