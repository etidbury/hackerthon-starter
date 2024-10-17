import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-unused-vars
export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  if (!process.env.VITE_APP_API_URL) {
    throw new Error('VITE_APP_API_URL env is required');
  }

  return defineConfig({
    plugins: [react()],
    // server: {
    //     port: parseInt(process.env.VITE_PORT),
    // },
  });
};
