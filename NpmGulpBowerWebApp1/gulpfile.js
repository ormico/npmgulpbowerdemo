// call require() to obtain a reference to each plugin we need
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

// Task: default
// create default task that depends on task app-css
// if you run task default it will cause the dependent
// tasks to run first
gulp.task('default', ['app-css']);

// Task: app-css
// scan all *.scss files under css folder
// run these files through the sass compiler
// sending all errors to sass.logError
// send output of sass compilation to css folder
gulp.task('app-css', function (done) {
    return gulp.src('./css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

// Task: css-watch
// watch all *.scss files under css folder
// if any of these files change, run task app-css
gulp.task('css-watch', function () {
    gulp.watch('./css/**/*.scss', ['app-css']);
});
