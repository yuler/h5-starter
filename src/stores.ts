import { acceptHMRUpdate, defineStore } from 'pinia'
import { sleep } from '@/utils'
import { $removeToken, $setToken } from '@/helpers'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    visible: false,
  }),
  actions: {
    $showLoading() {
      this.$state.visible = true
    },
    $hideLoading() {
      this.$state.visible = false
    },
  },
})

export const useToastStore = defineStore({
  id: 'toast',
  state: () => ({
    message: '',
  }),
  actions: {
    async $toast(message: string, duration = 1500) {
      this.message = message
      await sleep(duration)
      this.message = ''
    },
  },
})

export const useConfigStore = defineStore({
  id: 'config',
  state: () => ({
    _fetched: false,
    xxx: '',
  }),
  actions: {
    async init() {
      if (this.$state._fetched)
        return
      // TODO: fetch `global/config`
      const data = {}
      // const { data } = await api.get<any, any>('/global/config')
      this.$state = { ...this.$state, ...data, _fetched: true } as any
    },
  },
})

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    _fetched: false,
    xxx: '',
  }),
  actions: {
    async login(token: string) {
      $setToken(token)
      await this.init()
    },
    logout() {
      this.$reset()
      $removeToken()
    },
    async init(options: { force: boolean } = { force: true }) {
      if (this.$state._fetched && !options.force)
        return

      // TODO: fetch `user/profile`
      const data = {}
      // const [_, { data }] = await Promise.all([
      //   api.get('/ping'),
      //   api.get<null, any>('/user/profile'),
      // ])
      this.$state = { ...this.$state, ...data, _fetched: true }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
