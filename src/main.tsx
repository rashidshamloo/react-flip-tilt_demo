import React from 'react';
import ReactDOM from 'react-dom/client';
import MainDemo from './pages/MainDemo';
import MainDemoWithParallax from './pages/MainDemoWithParallax';
import FlipDirectionDemo from './pages/FlipDirectionDemo';
import ControlElementDemo from './pages/ControlElementDemo';
import Error from './pages/Error';
import './index.css';

// react-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// config
import { base } from './config/config.ts';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainDemo />,
      errorElement: <Error />,
    },
    {
      path: '/parallax',
      element: <MainDemoWithParallax />,
    },
    {
      path: '/flip-direction',
      element: <FlipDirectionDemo />,
    },
    {
      path: '/control-element',
      element: <ControlElementDemo />,
    },
  ],
  { basename: base }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
