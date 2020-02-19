const gulp = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');

function style() {
  return gulp.src('./assets/sass/main.sass')
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(gulp.dest('./assets/css'))
};

function watch() {
  gulp.watch('./assets/sass/**/*.sass', style);
}

exports.watch = watch;