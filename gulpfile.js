import gulp from 'gulp';
import {server} from './gulp/server.js';
import {style} from './gulp/style.js';
import {js} from './gulp/scripts.js';
import {sprite} from './gulp/sprite.js';
import {template} from './gulp/template.js';
import {image, webpGenerator} from './gulp/image.js';
import {woffConverter, woff2Converter} from './gulp/fonts.js';

import {path} from './gulp/config.js';

const images = gulp.parallel(image, webpGenerator);
const fonts = gulp.parallel(woff2Converter, woffConverter);
const defaultTask = gulp.series(
    sprite,
    gulp.parallel(
        js,
        style,
        images,
        template,
        fonts
    )
);
const watch = () => {
    server();
    gulp.watch(path.source + path.js, js);
    gulp.watch(path.source + path.scss, style);
    gulp.watch(path.source + path.image + path.sprite, sprite);
    gulp.watch(path.source + path.image, images);
    gulp.watch(path.source + path.font, fonts);
    gulp.watch(path.source + '*.html', template);
}

export {
    server,
    style,
    js,
    sprite,
    template,
    images,
    fonts,
    watch
}

export default defaultTask;

/*

'watch = () => {
};
*/

/*
* TODO
scss
- min
- concat
sprite
- svg
js
- babel
- min
- concat
template
- include
server
- server
- reload
image
- min
- webp
fonts
- ttf to woof and woof2

* copy svg sprite to compiled dir
* * */