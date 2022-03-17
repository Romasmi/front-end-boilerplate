import gulp from "gulp";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import include from 'gulp-include';
import jsObfuscator from 'gulp-javascript-obfuscator';

import {path} from './config.js';

function js() {
    return gulp.src(path.source + path.js + 'app.js')
        .pipe(include())
        .pipe(babel({
            presets: ['@babel/env']
        }))
/*
        .pipe(jsObfuscator())
        .pipe(uglify())
*/
        .pipe(gulp.dest(path.compiled + path.js))
}

export {
    js
}