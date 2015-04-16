/**
 * Created by taejun on 2015-04-16.
 */
var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('default', function() {

});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});