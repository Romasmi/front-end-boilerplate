import browserSync from 'browser-sync';
import {path} from './config.js';

function server() {
    return browserSync.init({
        server: path.compiled,
        open: false,
        port: 3000
    });
}

export default server;