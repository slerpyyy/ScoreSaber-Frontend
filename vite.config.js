import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
   plugins: [sveltekit()],
   ssr: {
      noExternal: ['chart.js']
   },
   optimizeDeps: {
      exclude: ['sswr']
   },
   server: {
      host: true,
      port: 3000
   }
};

export default config;
