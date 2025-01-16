import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './App/app-layout';
import { HomePage } from './pages/Home/home';
import { ProjectsPage } from './pages/Projects';
import { AboutMe } from './pages/about/about';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {path: '/project', element: <ProjectsPage/>},
        {path: '/about' , element: <AboutMe/>}
      ],
    },
  ],
  {
    basename: '/Portifolio', // Subdiretório do GitHub Pages
  }
);
