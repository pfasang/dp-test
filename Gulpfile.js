'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['ts']);
});

gulp.task('default', ['ts', 'nodemon', 'watch']);

gulp.task('ts', function () {
    return gulp.src(["./src/**/*.ts", "./test/**/*"])
        .pipe(ts({
            module: "commonjs",
            target: "es2017",
            noImplicitAny: false,
            sourceMap: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'dist/server.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        if (!started) {
            cb();
            started = true;
        }
    });
});
