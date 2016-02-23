// call require() to obtain a reference to each plugin we need
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

// Task: default
// create default task that depends on task app-css
// if you run task default it will cause the dependent
// tasks to run first
gulp.task('default', ['app-js', 'app-css']);

// Task: app-css
gulp.task('app-css', ['app-sass'], function (done) {
    return gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.css',
            './css/**/*.css',
            '!./css/all.css' // use '!' to exclude 'all.css' when concat all css files into all.css
    ])
      .pipe(cssnano())
      .pipe(concat('all.css').on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});

// Task: app-sass
// scan all *.scss files under css folder
// run these files through the sass compiler
// sending all errors to sass.logError
// send output of sass compilation to css folder
gulp.task('app-sass', function (done) {
    return gulp.src('./css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

// Task: app-js
// concatenate jquery, bootstrap, and all js files in ./scripts
// then minify uisng uglify while preserving license comments
// and create source map file(s) for js debugging
// write result out to ./scripts/all.js and ./scripts/all.js.map
gulp.task('app-js', function () {
    return gulp.src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './scripts/**/*.js',
            '!./scripts/all.js' // use '!' to exclude
    ])
      .pipe(sourcemaps.init())
      .pipe(uglify({ preserveComments: 'license' }))
      .pipe(concat('all.js').on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./scripts/'));
});

// Task: css-watch
// watch all *.scss files under css folder
// if any of these files change, run task app-css
gulp.task('css-watch', function () {
    gulp.watch('./css/**/*.scss', ['app-css']);
});

// Task: js-watch
// watch all *.js files under scripts folder
// if any of these files change, run task app-js
gulp.task('js-watch', function () {
    gulp.watch('./scripts/**/*.js', ['app-js']);
});
