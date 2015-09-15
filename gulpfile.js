var gulp = require('gulp');
var buildBranch = require('buildbranch');

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

gulp.task('git:deploy', function(done) {
	buildBranch({ folder: 'dist' }, done);
});