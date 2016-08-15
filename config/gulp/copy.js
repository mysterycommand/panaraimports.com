import gulp from 'gulp';

export default () => {
    return gulp
        .src([
            'source/*.{ico,icns,txt}',
            'source/CNAME',
        ])
        .pipe(gulp.dest('public'));
}
