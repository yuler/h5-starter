import { type RouteConfig } from 'vue-router'
import Login from '@/pages/login.vue'
import Demo from '@/pages/demo.vue'
import Home from '@/pages/home.vue'
import Authorize from '@/pages/authorize.vue'
import Me from '@/pages/me.vue'
import Error from '@/pages/error.vue'
import NotFound from '@/pages/404.vue'

const routes: Array<RouteConfig> = [
  // TODO: only for not `production` env
  { path: '/login', name: 'login', component: Login, meta: { title: '登录', requiresAuth: false } },
  { path: '/demo', name: 'demo', component: Demo, meta: { title: '示例', requiresAuth: false } },
  { path: '/authorize', name: 'authorize', component: Authorize, meta: { title: '授权中', requiresAuth: false }, props: route => ({ code: route.query.code, state: route.query.state, redirect: route.query.redirect }) },
  { path: '/500', name: 'error', component: Error, meta: { title: '服务器错误', requiresAuth: false, skipGuard: true } },
  { path: '/', name: 'home', component: Home, meta: { title: '首页' }, props: true },
  { path: '/me', name: 'me', component: Me, meta: { title: '我的' } },
  { path: '*', name: 'notFound', alias: '/404', component: NotFound, meta: { title: '404', requiresAuth: false, skipGuard: true } },
]

export default routes
