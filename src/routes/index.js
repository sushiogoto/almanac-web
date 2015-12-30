import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import NewsPageView          from 'views/NewsPageView';
import NotFoundView from 'views/NotFoundView';
import LoginView from 'views/LoginView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='about' component={AboutView} />
    <Route path='news/:id' component={NewsPageView} />
    <Route path='login' component={LoginView} />
    <Route path='*' component={NotFoundView} />
  </Route>
);
