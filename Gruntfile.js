/*
 * grunt-peon-gui
 * Creates a local webserver GUI tool to run Grunt tasks
 *
 * Copyright (c) 2013 Mark Parolisi, contributors
 * Licensed under the MIT license.
 */

/*global module */
module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            app: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        copy: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/jquery/',
                    src: ['jquery.js'],
                    dest: 'js/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'bower_components/requirejs/',
                    src: ['require.js'],
                    dest: 'js/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'bower_components/gsap/src/',
                    src: ['uncompressed/**'],
                    dest: 'js/gsap/'
                }]
            }
        },
        uglify: {
            app: {
                files: ['js/**/*.js'],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        },
        watch: {
            app: {
                files: ['js/**/*.js', 'sass/**/*.scss'],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['compass', 'copy', 'uglify']);
};