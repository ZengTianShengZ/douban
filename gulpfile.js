// 引入 gulp

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith');

gulp.task('sass',function(){
    return gulp.src(['src/sass/*.scss'])
        .pipe(sass())//编译
        .pipe(gulp.dest('build/css/'));
})
