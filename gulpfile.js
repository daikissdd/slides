var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	replace = require('gulp-replace'),
	minifyHTML = require('gulp-minify-html'),
	shell = require('gulp-shell');

gulp.task('shell', shell.task([
	'git add -A',
	'git commit -m"build_update"',
	'git push origin gh-pages'
]));

gulp.task('default', function() {
	gulp.run('shell');
});