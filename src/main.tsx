import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'virtual:uno.css';
import 'uno.css';
import 'virtual:unocss-devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-quill/dist/quill.snow.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
