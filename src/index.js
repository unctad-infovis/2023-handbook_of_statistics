import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';
import AppES from './jsx/App_es.jsx';
import AppFR from './jsx/App_fr.jsx';
import AppFooter from './jsx/Footer.jsx';

const AppRoot = document.getElementById('app-root-2023-handbook_of_statistics');
if (AppRoot) {
  const root = createRoot(AppRoot);
  root.render(<App />);
}

const AppESRoot = document.getElementById('app-root-2023-handbook_of_statistics_es');
if (AppESRoot) {
  const root = createRoot(AppESRoot);
  root.render(<AppES />);
}

const AppFRRoot = document.getElementById('app-root-2023-handbook_of_statistics_fr');
if (AppFRRoot) {
  const root = createRoot(AppFRRoot);
  root.render(<AppFR />);
}

const AppFooterRoot = document.getElementById('app-root-2023-handbook_of_statistics_footer');
if (AppFooterRoot) {
  const root = createRoot(AppFooterRoot);
  root.render(<AppFooter />);
}
