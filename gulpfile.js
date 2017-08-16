var gulp        = require('gulp');
var browserSync = require('browser-sync');
var eslint      = require('gulp-eslint');

// Static server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

gulp.task('lint', () => {
  return gulp.src(['app/assets/js/*.js'])
             .pipe(eslint({
               globals: [
                 '$',
                 'document',
                 'DateFormatter'
               ],
               configFile: '.eslintrc.json'
             }))
             .pipe(eslint.format())
             .pipe(browserSync.stream());
});

gulp.task('serve', ['browserSync'], function () {
  gulp.watch("app/assets/js/**/*.js", ['lint']);
  gulp.watch("app/index.html").on('change', browserSync.reload);
});
