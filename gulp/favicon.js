import gulp from 'gulp';
import changed from 'gulp-changed';
import ico from 'gulp-to-ico';

import {path} from './config.js';

function generateFavicon()
{
    return gulp.src(path.source + 'favicon.png')
        .pipe(ico('favicon.ico'))
        .pipe(gulp.dest(path.compiled));
}

function copyFavicon() {
    return gulp.src(path.source + 'favicon.png')
        .pipe(changed(path.compiled))
        .pipe(gulp.dest(path.compiled));
}

export default gulp.parallel(
    generateFavicon,
    copyFavicon
);