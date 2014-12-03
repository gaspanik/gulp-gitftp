var gulp = require('gulp');
var shell = require('gulp-shell');

/*  Config for your environment */

var config = {
  'username': 'your ftp username',
  'passwd': 'your ftp password',
  'host': 'ftp host path', // set ftp hostname. eg. 'ftp.example.com/htdocs'
  'root': './public_html' // set local syncroot path. eg. './', './public_html' etc
}

gulp.task('ftp-init', shell.task('git ftp init -u ' + config.username + ' -p ' + config.passwd + ' - ftp://' + config.host + ' --syncroot ' + config.root))

gulp.task('ftp-push', shell.task('git ftp push -u ' + config.username + ' -p ' + config.passwd + ' - ftp://' + config.host + ' --syncroot ' + config.root))
