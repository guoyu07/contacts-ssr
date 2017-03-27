import { app, router, store } from './app.js'

const isDev = process.env.NODE_ENV !== 'production'


export default context => {
  const s = isDev && Date.now()

  return new Promise((resolve, reject) => {
    // set router's location
    router.push(context.url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
        // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(component => {
        return component.preFetch && component.preFetch(store)
      })).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)

        context.state = store.state
        resolve(app)
      }).catch(reject)
    })
  })
}
