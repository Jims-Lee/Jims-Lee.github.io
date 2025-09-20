import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Jims-Lee.github.io/', // 添加这一行，仓库名要和你的仓库一致
})
