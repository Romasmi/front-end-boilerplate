import gulp from 'gulp';
import server from './gulp/server.js';
import style from './gulp/style.js';
import js from './gulp/scripts.js';
import sprite from './gulp/sprite.js';
import template from './gulp/template.js';
import image from './gulp/image.js';
import fonts from './gulp/fonts.js';
import favicon from './gulp/favicon.js';

import {path} from './gulp/config.js';

const watch = () => {
    server();
    gulp.watch(path.source + path.js, js);
    gulp.watch(path.source + path.scss, style);
    gulp.watch(path.source + path.image + path.sprite, sprite);
    gulp.watch(path.source + path.image, image);
    gulp.watch(path.source + path.font, fonts);
    gulp.watch(path.source + '**/*.twig', template);
}

export {
    server,
    style,
    js,
    sprite,
    template,
    image,
    fonts,
    favicon,
    watch
}

export default gulp.series(
    sprite,
    gulp.parallel(
        js,
        style,
        image,
        template,
        fonts,
    )
);