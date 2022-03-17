import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

import {path} from './config.js';

function style() {
    return gulp.src(path.source + path.scss + 'app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssnano({
            svgo: false
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.compiled + path.css));
}

export {
    style
}