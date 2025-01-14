  import path from "path"
  import react from "@vitejs/plugin-react"
  import { defineConfig } from "vite"

  export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
      port: 3004,
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
    