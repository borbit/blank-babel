var express = require('express')
var engines = require('consolidate')
var config  = require('config')
var routes = [
  require('routes/index')
]

var app = express()
app.set('strict routing', false)
app.set('views', 'public/pages')
app.set('view engine', 'ejs')
app.use(express.static(config.assets_dir_path))
app.engine('ejs', engines.ejs)
app.enable('trust proxy')

try {
  var manifest = require(config.dist_manifest_path)
} catch(e) {
  var manifest = {}
}

app.locals.asset = (src) => {
  if (manifest[src]) {
    return "/dist/#{manifest[src]}"
  }
  return src
}

routes.forEach((route) => {
  route(app)
})

app.listen(config.port, config.host, (err) => {
  if (err) throw err

  console.log('Application server started on', {
    host: config.host,
    port: config.port
  })
})