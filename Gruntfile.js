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
					port: 35729
				}
			}
		},
		compass: {
			dev: {
				options: {
					basePath: 'compass/',
					config: 'compass/config.rb'
				}
			}
		},
		handlebars: {
			compass: {
				options: {
					namespace: "JST"
				},
				files: {
					"compass/*.html": "compass/handlebars/**/*.handlebars"
				}
			}
		}
	});

	var taskName;
	for (taskName in pkg.devDependencies) {
		if (taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}

	grunt.registerTask('default', ['connect', 'watch']);

};