var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass:compile', function () {
    gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/'));
});

gulp.task('server:run', function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch('src/**/*.scss', function () {
        gulp.run('sass:compile');
    });

    gulp.watch("**/*.*").on('change', browserSync.reload);
});
