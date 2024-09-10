import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import VueDevtools from 'vite-plugin-vue-devtools'
import type { PluginOption } from 'vite'
import { setupUnplugin } from './unplugin'

export function setupVitePlugins(viteEnv: Env.ImportMeta) {
  const plugins: PluginOption = [
    vue({
      script: {
        defineModel: true,
      },
    }),
    vueJsx(),
    VueDevtools(),
    ...setupUnplugin(viteEnv),
    progress(),
  ]

  return plugins
}
