import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

import rollupNodePolyFill from 'rollup-plugin-polyfill-node';

import svgr from 'vite-plugin-svgr';

import { babel } from '@rollup/plugin-babel';

import type { UserConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

import { alias } from './vite.alias';

export default {
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  resolve: {
    alias: {
      ...alias.packages,
      ...alias.apps
    }
  },

  plugins: [
    babel({
      extensions: ['.ts', '.tsx'],

      babelHelpers: 'bundled'
    }),

    viteTsConfigPaths({
      root: '../../'
    }),

    svgr({
      svgrOptions: {
        ref: true
      }
    })
  ],

  build: {
    assetsDir: 'resources',

    /**
     * ReferenceError: Buffer is not defined
     * @see https://stackoverflow.com/a/74123844
     */
    rollupOptions: {
      plugins: [rollupNodePolyFill()]
    }
  },

  /**
   * ReferenceError: Buffer is not defined
   * @see https://stackoverflow.com/a/74123844
   */
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  }
} as unknown as UserConfig;
