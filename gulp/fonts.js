import gulp from 'gulp';
import changed from 'gulp-changed';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';

import {path} from './config.js';

function woffConverter (){
    return gulp.src(path.source + path.font + '**/*.ttf')
        .pipe(changed(path.compiled + path.font, {
            extension: '.woff',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.compiled + path.font))
}

function woff2Converter (){
    return gulp.src(path.source + path.font + '**/*.ttf')
        .pipe(changed(path.compiled + path.font, {
            extension: '.woff2',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff2({
            clone: true
        }))
        .pipe(gulp.dest(path.compiled + path.font))
}

export default gulp.parallel(
    woffConverter,
    woff2Converter
)