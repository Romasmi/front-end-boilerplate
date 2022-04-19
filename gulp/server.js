import browserSyncPlugin from "browser-sync";
import {path} from './config.js';

const browserSync = browserSyncPlugin.create();

function serve() {
    browserSync.init({
        server: path.compiled,
        open: true,
        port: 3000
    });
}

const reload = browserSync.reload;

export {serve, reload};