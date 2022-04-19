const path = {
    source: 'src/',
    compiled: 'dist/',
    public: 'public/',
    js: 'js/',
    image: 'image/',
    sprite: 'sprite/',
    font: 'fonts/',
    css: 'css/',
    scss: 'scss/',
}

const jsFilesRelativePath = [
    'bower_components/lozad/dist/lozad.js',
    path.js + 'app.js'
]

const jsFiles = jsFilesRelativePath.map((relativePath) => path.source + relativePath);

export {path, jsFiles};