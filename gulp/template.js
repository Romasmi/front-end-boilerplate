import gulp from "gulp";
import twig from 'gulp-twig';
import data from 'gulp-data';

import {path} from './config.js';
import seeding from '../seeder/data.js';

function template()
{
    return gulp.src(path.source + '**/*.twig')
        .pipe(data(seeding))
        .pipe(twig())
        .pipe(gulp.dest(path.compiled));
}

export default template;