import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _112b8722 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _8a0173e0 = () => interopDefault(import('../pages/calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _704f3925 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _6f6c9dfc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _074d056e = () => interopDefault(import('../pages/practice.vue' /* webpackChunkName: "pages/practice" */))
const _1f75bc6a = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _1bad5dec = () => interopDefault(import('../pages/tutorial.vue' /* webpackChunkName: "pages/tutorial" */))
const _17221734 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _112b8722,
    name: "about"
  }, {
    path: "/calculator",
    component: _8a0173e0,
    name: "calculator"
  }, {
    path: "/cases",
    component: _704f3925,
    name: "cases"
  }, {
    path: "/contact",
    component: _6f6c9dfc,
    name: "contact"
  }, {
    path: "/practice",
    component: _074d056e,
    name: "practice"
  }, {
    path: "/privacy",
    component: _1f75bc6a,
    name: "privacy"
  }, {
    path: "/tutorial",
    component: _1bad5dec,
    name: "tutorial"
  }, {
    path: "/",
    component: _17221734,
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
