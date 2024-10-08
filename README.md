# h5-starter

[![PNPM Badge](https://img.shields.io/badge/developed%20by-pnpm-black)](https://pnpm.io/)

```bash
git clone --depth 1 https://github.com/yuler/h5-starter <project>
rm -rf .git && git init && git add -A && git commit --message "Initial Commit"
```

## Project Structure

```bash
src                 # 源码目录
├── pages           # 页面
├── components      # 全局组件
├── utils           # 工具类
├── router.ts       # 路由
├── stores.ts       # 全局状态
└── constants.ts    # 全局常量
```

## Tech Stacks

- [Vite](https://vitejs.dev/)
- [Vue 2.7.x](https://v2.vuejs.org/)
- [UnoCSS](https://uno.antfu.me/)

## Development

- `corepack enable`
- `pnpm install`
- `pnpm run dev`

## Release

- `npm version <major|minor|patch>`
