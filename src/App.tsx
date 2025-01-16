import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Em um arquivo como index.tsx ou App.tsx
import './i18n'; // A importação do arquivo i18n.ts
import { ProjectsProvider } from "./context/ProviderContext";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";


export function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      {/* Definindo o título global usando titleTemplate */}
      <ProjectsProvider>
      <Helmet titleTemplate="%s | Robson" />

      <RouterProvider router={router} />
      </ProjectsProvider>
    </HelmetProvider>
    </QueryClientProvider>
  );
}
