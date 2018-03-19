var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('WhtmlGO', function () {
    return watch('./src/**/*.html', function () {
        gulp.src('./src/**/*.html') 
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist'))
            //.pipe(connect.reload());                 //利用connect套件刷新頁面
    

gulp.task('default',['WhtmlGO'])