import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Company from './pages/company';
import Rent from './pages/rent';
import Sale from './pages/sale';
import Customer from './pages/customer';
import Recruit from './pages/recruit';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'company',
        element: <Company />,
      },
      {
        path: 'rent',
        element: <Rent />,
      },
      {
        path: 'sale',
        element: <Sale />,
      },
      {
        path: 'customer',
        element: <Customer />,
      },
      {
        path: 'recruit',
        element: <Recruit />,
      },
    ],
  },
]);

root.render(
  <ThemeProvider theme={Theme}>
    <RouterProvider router={router} />
    <GlobalStyles />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
