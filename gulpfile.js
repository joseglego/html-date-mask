var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./app",
      routes: {
        "/bower_components": "bower_components"
      }
    }
  });
});
