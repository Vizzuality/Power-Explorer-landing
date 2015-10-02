/*jshint node:true*/

'use strict';

module.exports = function(grunt) {

  /**
   * [config description]
   * @type {Object}
   */
  var config = {
    app: 'app',
    dist: 'dist'
  };

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  /**
   * Configuring grunt tasks
   */
  grunt.initConfig({

    // Project settings
    config: config,

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            '{,*/}*.html',
            'assets/video/{,*/}*.*',
            'assets/arrow-down.svg',
            'assets/what.svg',
            'assets/features/icon-developers.svg',
            'CNAME'
          ]
        }]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 5000,
        hostname: 'localhost'
      },
      server: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(config.app)
            ];
          }
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      compile: {
        options: {
          bundleExec: true,
          style: 'expanded',
          loadPath: ['./bower_components/foundation/scss'],
          sourcemap: 'none'
        },
        files: {
          '.tmp/styles/main.css': '<%= config.app %>/styles/main.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browswers: ['last 2 versions']
          })
        ]
      },
      dev: {
        src: '.tmp/styles/main.css'
      },
      dist: {
        src: '<%= config.dist %>/styles/main.css'
      }
    },

    cssmin: {
      compile: {
        files: {
          '<%= config.dist %>/styles/main.css': [
            '.tmp/styles/main.css'
          ]
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: './.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js'
      ]
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.app %>/index.html'
    },

    concat: {
      generated: {
        files: [
          {
            dest: '<%= config.dist %>/scripts/main.js',
            src: [
              'bower_components/jquery/dist/jquery.js',
              'bower_components/underscore/underscore.js',
              'bower_components/backbone/backbone.js',
              'bower_components/Class.js/Class.js',
              'bower_components/foundation/js/foundation.js',
              'bower_components/slick.js/slick/slick.js',
              '<%= config.app %>/scripts/{,*/}*.js',
            ]
          }
        ]
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/assets/{,*/}',
          '<%= config.dist %>/assets/video',
          '<%= config.dist %>/styles',
          '<%= config.dist %>/styles/'
        ]
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/assets',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/assets'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/assets',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/assets'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          // true would impact styles with attribute selectors
          removeRedundantAttributes: false,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      scripts: {
        files: '<%= jshint.all %>',
        tasks: []
      },
      styles: {
        files: '<%= config.app %>/styles/{,*/}*.scss',
        tasks: ['sass']
      }
    },

    // gh-pages for deploy
    'gh-pages': {
      options: {
        base: '<%= config.dist %>'
      },
      src: ['**']
    }

  });

  /**
   * Use this task for run javascript test and code quality
   * command: grunt
   */
  grunt.registerTask('test', [
    'jshint'
  ]);

  /**
   * Use this task for development
   * command: grunt
   */
  grunt.registerTask('default', [
    'test',
    'sass'
  ]);

  /**
   * Create local server, useful to develop
   */
  grunt.registerTask('serve', [
    //'default',
    'connect:server',
    'watch',
    'postcss:dev'
  ]);

  /**
   * Build and create dist folder, useful for test before deploy
   * command: grunt build
   */
  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'sass',
    'imagemin',
    'svgmin',
    'copy:dist',
    'cssmin:compile',
    'postcss:dist',
    'concat:generated',
    'usemin',
    'htmlmin'
  ]);

  /**
   * Deploy with gh-pages
   * command: grunt deploy
   */
  grunt.registerTask('deploy', ['build', 'gh-pages']);

};
