var gulp = require('gulp');

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    return gulp.src(['index.js', 'bugs/*.js', 'specs/*.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    var mocha = require('gulp-mocha');
    return gulp.src('specs/*.js', { read: false }).pipe(mocha());
});

gulp.task('default', ['lint', 'test']);
