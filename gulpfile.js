// 引入 gulp

var gulp = require('gulp');

// 引入组件

var   sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')//编译的文件
        .pipe(sass())//编译
        .pipe(gulp.dest('src/css'));});//输出



gulp.task('sprite', function () {
    var spriteData = gulp.src('src/img/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss'
    }));
    return spriteData.pipe(gulp.dest('path/to/output/'));
});
