import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        //secure is false means without ssl verification we can proceed;
        //'/api means any route starts with /api will form to  http://localhost:3000/api//.. etc.
      },
    },
  },

  plugins: [react()],
});