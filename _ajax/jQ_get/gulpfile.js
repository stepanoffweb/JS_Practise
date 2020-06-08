var gulp = require('gulp')
var bs = require('browser-sync')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var concatCSS = require('gulp-concat-css')

gulp.task('server', function () {
  bs.init({
    proxy: 'localhost:8888/lesson_19/',
    notify: false
  })
  gulp.watch('lesson_19/css/*.css').on('change', bs.reload)
  gulp.watch('lesson_19/js/*.js').on('change', bs.reload)
  gulp.watch('lesson_19/*.html').on('change', bs.reload)
})

gulp.task('default', ['server'])
