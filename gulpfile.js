const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');

let path = {
    'sprite': 'assets/template/image/sprite/*',
    'image': 'assets/template/image/',
    'css': 'assets/template/style/css/',
    'scss': 'assets/template/style/scss/*',
    'html': '*.html',
    'js': 'assets/template/js/main.js',
    'template': 'assets/template/',
};

function createSpritePNG() {
    del.sync(['assets/template/image/sprite*.png']);
    const spriteSheetNamePostfix = Date.now();
    let spriteData = gulp.src(path.sprite + '.png').pipe(spritesmith({
        imgName: `sprite${spriteSheetNamePostfix}.png`,
        cssName: 'sprite.css',
        imgPath: `../../image/sprite${spriteSheetNamePostfix}.png`,
        cssOpts: {
            cssSelector: function(sprite) {
                return '.icon-' + sprite.name.replace(/_/g, '-');
            }
        }
    }));

    spriteData.img.pipe(gulp.dest(path.image));
    return spriteData.css.pipe(gulp.dest(path.css));
}

function createSpriteSVG() {
    return gulp.src(path.sprite + '.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: 'image',
                    sprite: 'sprite.svg'
                },
                css: {
                    render: {
                        css: true
                    }
                }
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
    return gulp.src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer([
            'Android >= 2.2',
            'Chrome >= 3.5',
            'Firefox >= 3.5',
            'Explorer >= 8',
            'iOS >= 4.3',
            'Opera >= 10.1',
            'Safari >= 3',
            'IE >= 9'
        ]))
        .pipe(gulp.dest(path.css))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(path.sprite + '.png', createSpritePNG);
    gulp.watch(path.sprite + '.svg', createSpriteSVG);
    gulp.watch(path.scss, style);
    gulp.watch([path.html, path.js]).on('change', browserSync.reload);
}

exports.default = watch;