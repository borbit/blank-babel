var fs = require('fs')
var del = require('del')
var gulp = require('gulp')
var gulpLess = require('gulp-less')
var gulpBabel = require('gulp-babel')
var gulpRename = require('gulp-rename')
var gulpBase64 = require('gulp-base64')
var vinylPaths = require('vinyl-paths')
var paths = require('./gulpfile_paths')
var browserify = require('browserify')
var babelify = require('babelify')
var envify = require('envify')

//
//
gulp.task('compile-page-less', () => {
  var compile = gulpLess({
    relativeUrls: true
  , rootpath: '/blocks'
  })

  compile.on('error', (err) => {
    console.log('less', err)
  })

  var base64Encode = gulpBase64({
    extensions: [/#datauri/i]
  , baseDir: './public'
  })

  return gulp
    .src(paths.globPageLess)
    .pipe(compile)
    .pipe(gulpRename({extname: '.css'}))
    .pipe(base64Encode)
    .pipe(gulp.dest(paths.assetsDir))
})

//
//
gulp.task('compile-common-less', () => {
  var compile = gulpLess({
    relativeUrls: true
  , rootpath: '/blocks'
  })

  compile.on('error', (err) => {
    console.log('less', err)
  })

  var base64Encode = gulpBase64({
    extensions: [/#datauri/i]
  , baseDir: './public'
  })

  return gulp
    .src(paths.commonLess)
    .pipe(compile)
    .pipe(gulpRename({extname: '.css'}))
    .pipe(base64Encode)
    .pipe(gulp.dest(paths.assetsDir))
})

//
//
gulp.task('compile-page-js', () => {
  var b = browserify('./public/pages/index/index.js', {debug: true});

  b.transform(babelify)
  // b.transform(envify({'NODE_ENV': ':)'}))

  getExternalModules().forEach((module) => {
    b.exclude(module.name)
  })

  b.on('error', (err) => {
    console.log('browserify', err.message)
  })
    
  b = b.bundle()
  b.pipe(fs.createWriteStream('./public/assets/index/index.js'))
  return b
})

//
//
gulp.task('compile-common-js', () => {
  var b = browserify(config.commonJs, {debug: true});

  b.transform(babelify)
  // b.transform(envify({'NODE_ENV': ':)'}))

  getExternalModules().forEach((module) => {
    b.require(module.path, {expose: module.name})
  })

  b.on('error', (err) => {
    console.log('browserify', err.message)
  })
    
  b = b.bundle()
  b.pipe(fs.createWriteStream('./public/assets/config.js'))
  return b
})

//
//
gulp.task('compile', [
  'compile-common-less'
, 'compile-page-less'
// , 'compile-common-js'
, 'compile-page-js'
])

// synchroniously read common.coffee and parse
// all the path and names of modules it exposes
// returns: [
//   {path: '../js/libs/jquery.transit.js', name: 'jquery.transit.js'},
//   {path: '../js/libs/jquery.ui.js', name: 'jquery.ui.js'}
// ]
function getExternalModules() {
  var callee = getExternalModules
  
  if (callee.modules) {
    return callee.modules 
  }

  var regexp = /require\(*'(.+)'\)\s*\/\/@expose(\s*as\s*(.+))?/ig
  var content = fs.readFileSync(paths.commonJs)
  var modules = []
  var found
  
  while(found = regexp.exec(content)) {
    modules.push({
      path: found[1],
      name: found[3] || found[1]
    })
  }

  return callee.modules = modules
}