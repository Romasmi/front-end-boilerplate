import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import optipng from 'gulp-imagemin';
import mozjpeg from 'gulp-imagemin';
import webpConv from 'gulp-webp';

import {path} from './config.js';

function image() {
    return gulp.src(path.source + path.image + '**/*.+(png|jpg|jpeg)')
        .pipe(changed(path.compiled + path.image))
        .pipe(imagemin({},
            [
                mozjpeg({
                    quality: 95
                }),
                optipng()
            ]))
        .pipe(gulp.dest(path.compiled + path.image))
}

function webpGenerator() {
    return gulp.src(path.source + path.image + '**/*.+(png|jpg|jpeg)')
        .pipe(changed(path.compiled + path.image), {
            extension: '.webp'
        })
        .pipe(webpConv({
            quality: 85
        }))
        .pipe(gulp.dest(path.compiled + path.image))
}

export {
    image,
    webpGenerator
}