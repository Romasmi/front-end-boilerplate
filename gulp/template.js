import gulp from "gulp";
import include from 'gulp-file-include';

import {path} from './config.js';

function template()
{
    return gulp.src(path.source + '*.html')
        .pipe(include())
        .pipe(gulp.dest(path.compiled));
}

export{
    template
}