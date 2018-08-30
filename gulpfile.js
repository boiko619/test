'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('scss', function(){
    gulp.src('scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css'))
});
 
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['scss']);
    // Other watchers
});
 
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'project/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("project/css"))
        .pipe(browserSync.stream());
});

 gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("project/js"))
        .pipe(browserSync.stream());
});
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./project" 
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'project/scss/*.scss'], ['sass']);
    gulp.watch("project/*.html").on('change', browserSync.reload);
 });
 


gulp.task('default', ['sass','js','scss','serve']); 



gulp.task('hello', function() {
    console.log('Hello Gulp');
});
