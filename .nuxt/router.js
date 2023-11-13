import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51982efa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d22b9b36 = () => interopDefault(import('../pages/calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _6b05a8a0 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _4ec52ccd = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _454d7ade = () => interopDefault(import('../pages/practice.vue' /* webpackChunkName: "pages/practice" */))
const _b41d8f96 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _64a15b81 = () => interopDefault(import('../pages/tutorial.vue' /* webpackChunkName: "pages/tutorial" */))
const _715009bf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _51982efa,
    name: "about"
  }, {
    path: "/calculator",
    component: _d22b9b36,
    name: "calculator"
  }, {
    path: "/cases",
    component: _6b05a8a0,
    name: "cases"
  }, {
    path: "/contact",
    component: _4ec52ccd,
    name: "contact"
  }, {
    path: "/practice",
    component: _454d7ade,
    name: "practice"
  }, {
    path: "/privacy",
    component: _b41d8f96,
    name: "privacy"
  }, {
    path: "/tutorial",
    component: _64a15b81,
    name: "tutorial"
  }, {
    path: "/",
    component: _715009bf,
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
