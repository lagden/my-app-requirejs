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
                    cwd: 'bower_components/gsap/src/minified/',
                    src: ['**'],
                    dest: 'js/gsap/'
                }]
            }
        },
        uglify: {
            app: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                    properties: true,
                    preserveComments: false,
                    compress: {
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true
                    }
                },
                files: [
                    {'js/jquery.js': ['js/jquery.js']},
                    {'js/require.js': ['js/require.js']},
                ]
            }
        },
        watch: {
            app: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['compass', 'copy', 'uglify']);
};