import 'es6-promise/auto'
import { app, router, store } from './app.js'


if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}


router.onReady(() => {
  // actually mount to DOM
  app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
