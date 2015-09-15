var gulp = require('gulp');
var buildBranch = require('buildbranch');

gulp.task('build', function(done) {
	return gulp.src('./src/app/index.html')
			.pipe(gulp.dest('./dist/'));
});

gulp.task('git:deploy', ['build'], function(done) {
	buildBranch({
		branch: 'release',
		ignore: ['.git', 'src', 'node_modules'],
		folder: 'dist'
	}, function(err) {
		if(err) {
			throw err;
		}
		console.log('Published!');
	});
});