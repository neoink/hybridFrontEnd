const browserify = require('browserify'),
  babelify = require('babelify'),
  gulp = require('gulp'),
  uglifyify = require('uglifyify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  path = require('path'),
  watch = require('gulp-watch'),
  fs = require('fs')

gulp.task('browserify', () => {
  return browserify({
    entries: './index.js',
    debug: false
  })
    .transform('babelify', {
      presets: ['env'],
      plugins: ['transform-runtime', 'wildcard']
    })
    .transform('uglifyify', {
      global: true,
      mangle: true,
      compress: {
        sequences: true,
        properties: true,
        dead_code: true,
        unsafe: false,
        conditionals: true,
        comparisons: true,
        evaluate: false, // [!] disable asm.js if true
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        side_effects: false,
        warnings: true
      }
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', function() {
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp
    .src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        require('precss'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('css-mqpacker')(),
        require('cssnano'),
        require('postcss-modules')({
          getJSON: function(cssFileName, json, outputFileName) {
            const cssName = path.basename(cssFileName, '.css')
            const jsonFileName = path.resolve(
              './dist/css/json/' + cssName + '.json'
            )
            fs.writeFileSync(jsonFileName, JSON.stringify(json))
          }
        })
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
  gulp.watch(['./index.js', './src/**/*.js'], ['browserify'])
})
