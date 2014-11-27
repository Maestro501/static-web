// Include gulp
var gulp = require('gulp'); 

// Watch Files For Changes
module.exports = function() {
  gulp.watch('client/app/*.js', ['browserify']);
  return gulp.watch('client/app/*.scss', ['sass']);
};

