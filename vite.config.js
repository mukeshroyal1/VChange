import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        open: true, // Automatically open the browser
        proxy: {
            '/api': 'http://localhost:4000', // Proxy API requests to backend
        },
    }
});
