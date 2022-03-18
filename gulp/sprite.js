import del from "del";
import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import copy from "gulp-copy";

import {path} from './config.js';

function sprite() {
    del(path.source + path.image + 'sprite*.svg').then(r => {
    });
    return gulp.src(path.source + path.image + path.sprite + '*.svg')
        .pipe(svgSprite({
            mode: {
                css: {
                    dest: path.scss,
                    render: {
                        scss: true
                    },
                    dimensions: true,
                    prefix: '.icon-%s',
                    sprite: '../' + path.image + 'sprite.svg',
                    common: 'icon'
                },
            },
            shape: {
                id: {
                    generator: function (fileName) {
                        return fileName.slice(0, -4).replace(/_([a-z])/g, g => g[1].toUpperCase());
                    }
                }
            }
        }))
        .pipe(gulp.dest(path.source));
}

function copySprite() {
    del(path.compiled + path.image + 'sprite*.svg').then(r => {
    });
    return gulp.src(path.source + path.image + 'sprite*.svg')
        .pipe(gulp.dest(path.compiled + path.image));
}

export default gulp.series(
    sprite,
    copySprite
);