const path = require('path')
const express = require('express')
const consola = require('consola')
var request = require('request');
const { Nuxt, Builder } = require('nuxt')
const app = express()
const phpExpress = require('php-express')({
  binPath: 'php'
})
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http:
    badge: true
  })
}
start()
