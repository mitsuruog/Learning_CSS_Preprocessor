module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    compress: false,
                    //      paths: ['path/to/import', 'another/to/import'],
                    //      urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
                    //      use: [
                    //        require('fluidity') // use stylus plugin at compile time
                    //      ]
                },
                files: {
                    'stylus/*.css': 'stylus/src/*.styl', // 1:1 compile
                    //      'main.css': ['src/*.styl', 'path/to/more/*.styl'] // compile and concat into single file
                }
            }
        },
        watch: {
            files: ['stylus/src/*.styl'],
            tasks: ['stylus']
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    // Default task.
    grunt.registerTask('default', 'watch');

};