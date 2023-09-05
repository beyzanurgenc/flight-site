import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConclusionPage from './components/conclusionPage/ConclusionPage';
import HomePage from './components/homePage/HomePage';
import ListPage from './components/listPage/ListPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <div>HATA!!</div>
    },
    {
      path: '/list',
      element: <ListPage />,
      errorElement: <div>HATA!!</div>
    },
    {
      path: '/conclusion',
      element: <ConclusionPage />,
      errorElement: <div>HATA!!</div>
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;