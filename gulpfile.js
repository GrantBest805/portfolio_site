
const gulp = require('gulp');
const browserSync = require('browser-sync');
let reload = browserSync.reload;
const nodemon = require('gulp-nodemon');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');
var del = require('del');

// Gulp Tasks
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync({
    proxy: "localhost:3000",
    port: 5000,
    notify: true
  });
});

// Server
gulp.task('nodemon', (cb) => {
  var called = false;
  return nodemon({
    script: 'server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', () => {
    if(!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout( () => {
      reload({ stream: false});
    },1000);
  });
});

//  Concatenate and Minify js and css files/ create a dist folder with min files.
gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Minify images
gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/images'))
});

// copy files and add to dist folder
gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

// Watching for reload. Run (gulp watch) to start NODE server
gulp.task('watch',['browser-sync'], () => {
  gulp.watch(['app/*.html'], reload);
  gulp.watch(['app/**/*.css'], reload);
});

// Clean up generated files
gulp.task('clean:dist', () => {
  return gulp.src('dist');
});

// combine gulp Tasks
gulp.task('build', (callback) => {
  runSequence('clean:dist',
    ['useref', 'images','fonts'],
    callback
  )
});

gulp.task('default', (callback) => {
  runSequence('watch', callback)

});
