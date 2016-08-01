var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass:compile', function () {
    gulp.src('style/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError)) //outputStyle: [expanded, compact, compressed]
        .pipe(gulp.dest('style/'));
});

gulp.task('server:run', function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch('style/**/*.scss', function () {
        gulp.run('sass:compile');
    });

    gulp.watch("**/*.*").on('change', browserSync.reload);
});
