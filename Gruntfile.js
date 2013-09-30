module.exports = function (grunt) {

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: 'compass/**/*.scss',
				tasks: ['compass']
			},
			html: {
				files: '**/*.html'
			}
		},
		connect: {
			livereload: {
				options: {
					port: 9001
				}
			}
		},
		compass: {
			options: {
				config: 'config.rb',
				sassDir: 'compass/scss',
				cssDir: 'compass/css'
			}
		}
	});

	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}

	grunt.registerTask('default', ['connect', 'watch']);

};