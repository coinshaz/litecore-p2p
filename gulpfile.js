'use strict';

var gulp = require('gulp');
var unitedcoreTasks = require('unitedcore-build');

unitedcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
