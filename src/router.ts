import VueRouter from 'vue-router'
import { useConfigStore, useUserStore } from '@/stores'
import routes from '@/routes'
import { $isLogin } from '@/helpers'

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' }
  },
})

// Router Guards
router.beforeEach(async (to, _form, next) => {
  // Set document title
  document.title = to?.meta?.title

  // Skip
  if (to.meta?.skipGuard) {
    next()
    return
  }
  // Remove body lock
  // unlockBodyScroll()

  // Global config
  const configStore = useConfigStore()
  try {
    await configStore.init()
  }
  catch (error) {
    next({ name: 'error', query: { error: JSON.stringify(error), redirect: window.encodeURIComponent(to.fullPath) } })
  }

  // Requires Auth
  if (to.meta?.requiresAuth !== false && !$isLogin()) {
    // TODO: OAuth callback url
    // window.location.href = oAuthURL
  }
  else {
    if ($isLogin()) {
      const userStore = useUserStore()
      try {
        await userStore.init()
      }
      catch (error) {
        next({ name: 'error', query: { error: JSON.stringify(error), redirect: window.encodeURIComponent(to.fullPath) } })
      }
    }
    next()
  }
})

export default router
