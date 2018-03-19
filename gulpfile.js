var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var  watch = require('gulp-watch'); 

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch('src/**', ['minify']);
});

gulp.task('default',['minify','watch']);