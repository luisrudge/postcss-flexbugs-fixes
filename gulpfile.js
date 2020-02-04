var gulp = require('gulp');

function lint() {
  var eslint = require('gulp-eslint');
  return gulp
    .src(['index.js', 'bugs/*.js', 'specs/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function test() {
  var mocha = require('gulp-mocha');
  return gulp.src('specs/*.js', { read: false }).pipe(mocha());
}

exports.default = gulp.series(lint, test);
