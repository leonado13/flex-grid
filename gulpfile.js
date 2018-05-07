const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');

const scssFiles = 'src/scss/*.scss';
const cssFile = 'dist';

gulp.task('css', function() {
    return gulp.src(scssFiles)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssFile));
});

gulp.task('watch', function () {
    gulp.watch(sourceFiles, ['css']);
});

gulp.task('default', [ 'css' ]);
