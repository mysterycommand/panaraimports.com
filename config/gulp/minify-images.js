import gulp from 'gulp';
import gimagemin from 'gulp-imagemin';

export default () => {
    return gulp
        .src([
            'source/assets/*',
            'source/images/*',
        ], {
            base: 'source',
        })
        .pipe(gimagemin())
        .pipe(gulp.dest('public'));
}
