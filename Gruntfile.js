/**
 * Created by Stephen on 05/07/2016.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            distbsjs: {
                src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
                dest: 'public/javascripts/bootstrap.min.js'
            },
            distbscs: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'public/stylesheets/bootstrap.min.css'
            },
            distjqjs: {
                src: ['node_modules/jquery/dist/jquery.min.js'],
                dest: 'public/javascripts/jquery.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat:distbsjs', 'concat:distbscs', 'concat:distjqjs']);
};