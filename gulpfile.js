    const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');

let path = {
    'sprite': 'assets/template/image/sprite/',
    'image': 'assets/template/image/',
    'css': 'assets/template/style/css/',
    'scss': 'assets/template/style/scss/',
    'html': '*.html',
    'js': 'assets/template/js/main.js',
    'template': 'assets/template/',
};

function sprite() {
    del.sync([path.image + 'sprite*.svg']);
    return gulp.src(path.sprite + '*.svg')
        .pipe(svgSprite({
            mode: {
                css: {
                    dest: '/' + path.scss,
                    render: {
                        scss: true
                    },
                    dimensions: true,
                    prefix: '.icon-%s',
                    sprite: '/' + path.image + 'sprite.svg',
                    common: 'icon'
                },
            },
            shape: {
                id: {
                    generator: function(fileName) {
                        spriteID = fileName.slice(0, -4);
                        camelCasedSpriteID = spriteID.replace(/_([a-z])/g, g => g[1].toUpperCase());
                        return camelCasedSpriteID;
                    }
                }
            }
        }))
        .pipe(gulp.dest(path.template));
}

function style() {
    return gulp.src(path.scss + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer([
            'Android >= 2.2',
            'Chrome >= 3.5',
            'Firefox >= 3.5',
            'iOS >= 8',
            'Opera >= 10.1',
            'Safari >= 3',
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.css))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(path.sprite + '*.svg', sprite);
    gulp.watch(path.scss + '*.scss', style);
    gulp.watch([path.html, path.js]).on('change', browserSync.reload);
}

function build()
{
    sprite();
    style();
}

exports.default = watch;
exports.svg = sprite;
exports.style = style;

exports.build = build;