import { resolve } from 'node:path'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import Autoprefixer from 'autoprefixer'
import Legacy from '@vitejs/plugin-legacy'
import Vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import { version } from './package.json'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, __dirname)

  return {
    plugins: [
      splitVendorChunkPlugin(),
      Legacy(),
      Vue(),
      Components({
        dirs: ['src/components'],
        resolvers: [
          IconsResolver({
            customCollections: ['assets'],
          }),
        ],
        dts: 'src/components.d.ts',
      }),
      Icons({
        compiler: 'vue2',
        autoInstall: true,
        customCollections: {
          assets: FileSystemIconLoader(
            resolve(__dirname, 'src/assets'),
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
      }),
      Unocss(),
    ],
    define: {
      __APP_VERSION__: JSON.stringify(version),
    },
    build: {
      minify: 'terser',
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: {
        plugins: [
          Autoprefixer(),
        ],
      },
    },
    server: {
      proxy: {
        '^/api': {
          target: env.VITE_API_PROXY,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          configure(proxy, _options) {
            proxy.on('proxyRes', (proxyRes, _req, _res) => {
              proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie']
                ?.map(cookie => cookie.replace('HttpOnly', ''))
            })
          },
        },
      },
    },
  }
})
