/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ROOT: string
  readonly VITE_API_BASE: string
  readonly VITE_TRACK_DOMAIN: string
  readonly VITE_TRACK_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __APP_VERSION__: string

// TODO:
declare const WeixinJSBridge: any
declare const wx: any