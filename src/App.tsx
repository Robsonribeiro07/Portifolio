import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export function App() {
  return (
    <HelmetProvider>
      {/* Definindo o título global usando titleTemplate */}
      <Helmet titleTemplate="%s | Robson" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
