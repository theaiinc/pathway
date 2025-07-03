import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  root: __dirname,
  plugins: [react(), nxViteTsPaths(), cssInjectedByJsPlugin()],
  build: {
    // Instead of a library build, we use a standard build and specify
    // the entry point. This ensures all dependencies are bundled.
    outDir: 'dist',
    rollupOptions: {
      input: {
        'pathway-goggles-wc': path.resolve(__dirname, 'src/web-component.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
