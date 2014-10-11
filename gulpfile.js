var gulp = require('gulp'),
	_ = require('underscore'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	replace = require('gulp-replace'),
	minifyHTML = require('gulp-minify-html'),
	template = require('gulp-template'),
	shell = require('gulp-shell');

gulp.task('git', shell.task([
	'git add -A',
	'git commit -m"build_update"',
	'git push origin gh-pages'
]));

gulp.task('new', shell.task([
	'git add -A',
	'git commit -m"build_update"',
	'git push origin gh-pages'
]));

gulp.task('default', function() {
	
	gulp.run('git');
});