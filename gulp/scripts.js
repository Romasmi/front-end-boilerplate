import gulp from "gulp";
import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import include from 'gulp-include';
import jsObfuscator from 'gulp-javascript-obfuscator';

import {path, jsFiles} from './config.js';

function js() {
    return gulp.src(jsFiles)
/*
        .pipe(babel({
            presets: ['@babel/env']
        }))
*/
/*
        .pipe(jsObfuscator())
        .pipe(uglify())
*/
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.compiled + path.js))
}

export default js;