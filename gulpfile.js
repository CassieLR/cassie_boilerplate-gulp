// Load plugins
var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');


// Styles
gulp.task('styles', function() {
	return gulp.src('assets/less/styles.less')
		.pipe(less())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify("Styles task completed"));
});


// Default task
gulp.task('default', function() {
	gulp.start('styles');
});

// Watch
gulp.task('watch', function() {

	// Watch .scss files
    gulp.watch('assets/less/**/*.less', ['styles']);

});
