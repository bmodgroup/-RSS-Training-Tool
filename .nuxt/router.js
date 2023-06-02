import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4bb831b9 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _bf2de1f4 = () => interopDefault(import('../pages/calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _76c5a322 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _40ef7bcc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _cf25e882 = () => interopDefault(import('../pages/practice.vue' /* webpackChunkName: "pages/practice" */))
const _cfc8f198 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _907e273c = () => interopDefault(import('../pages/tutorial.vue' /* webpackChunkName: "pages/tutorial" */))
const _6b700c7e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4bb831b9,
    name: "about"
  }, {
    path: "/calculator",
    component: _bf2de1f4,
    name: "calculator"
  }, {
    path: "/cases",
    component: _76c5a322,
    name: "cases"
  }, {
    path: "/contact",
    component: _40ef7bcc,
    name: "contact"
  }, {
    path: "/practice",
    component: _cf25e882,
    name: "practice"
  }, {
    path: "/privacy",
    component: _cfc8f198,
    name: "privacy"
  }, {
    path: "/tutorial",
    component: _907e273c,
    name: "tutorial"
  }, {
    path: "/",
    component: _6b700c7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
