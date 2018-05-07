var gulp = require('gulp');
var sass = require('gulp-sass');

var sourceFiles = 'src/scss/*.scss';

gulp.task('css', function() {
    return gulp.src(sourceFiles)
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(sourceFiles, ['css']);
});

gulp.task('default', [ 'css' ]);
