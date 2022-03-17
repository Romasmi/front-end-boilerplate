import browserSync from 'browser-sync';

function server() {
    return browserSync.init({
        server: '/',
        open: false,
        port: 3000
    });
}

export {
    server
}