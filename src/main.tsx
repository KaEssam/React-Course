import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.tsx';
import './index.css';
import { About, Home } from './Pages.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'details/:id' },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />,
);
