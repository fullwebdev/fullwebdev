const sass = require('node-sass');

const distFiles = [
	'*.html',
	'reveal-config.js',
	'markdown/**',
	'favicon.png',
	'css/**',
	'js/**',
	'lib/**',
	'assets/**',
	'plugin/**',
];

module.exports = grunt => {

	require('load-grunt-tasks')(grunt);

	let port = grunt.option('port') || 8000;
	let root = grunt.option('root') || '.';

	if (!Array.isArray(root)) root = [root];

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://revealjs.com\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2019 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		qunit: {
			files: [ 'test/*.html' ]
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n',
				ie8: true
			},
			build: {
				src: 'js/reveal.js',
				dest: 'dist/slides/reveal/js/reveal.min.js'
			}
		},

		sass: {
			options: {
				implementation: sass,
				sourceMap: false
			},
			core: {
				src: 'css/reveal.scss',
				dest: 'dist/slides/reveal/css/reveal.css'
			},
			themes: {
				expand: true,
				cwd: 'css/theme/source',
				src: ['*.sass', '*.scss'],
				dest: 'dist/slides/reveal/css/theme',
				ext: '.css'
			},
			custom: {
				src: 'css/custom/source/index.scss',
				dest: 'dist/slides/reveal/css/custom/index.css'
			}
		},

		autoprefixer: {
			core: {
				src: 'dist/slides/reveal/css/reveal.css'
			}
		},

		cssmin: {
			options: {
				compatibility: 'ie9'
			},
			compress: {
				src: 'dist/slides/reveal/css/reveal.css',
				dest: 'dist/slides/reveal/css/reveal.min.css'
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				esnext: true,
				latedef: 'nofunc',
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				loopfunc: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false,
					define: false,
					exports: false,
					require: false
				}
			},
			files: [ 'gruntfile.js', 'js/reveal.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: 'dist/slides/reveal',
					livereload: true,
					open: true,
					useAvailablePort: true
				}
			}
		},

		zip: {
			bundle: {
				src: distFiles,
				dest: 'dist/slides/reveal/reveal-js-presentation.zip'
			}
		},

		copy: {
			dist: {
				src: distFiles,
				dest: 'dist/slides/reveal/'
			},
			html: {
				src: root.map(path => path + '/*.html'),
				dest: 'dist/slides/reveal/'
			}
		},

		clean: {
			build: {
				src: ['dist/slides/reveal']
			}
		},

		watch: {
			js: {
				files: [ 'gruntfile.js', 'js/reveal.js' ],
				tasks: 'js'
			},
			theme: {
				files: [
					'css/theme/source/*.sass',
					'css/theme/source/*.scss',
					'css/theme/template/*.sass',
					'css/theme/template/*.scss'
				],
				tasks: 'css-themes'
			},
			custom: {
				files: [
					'css/custom/source/*.scss'
				],
				tasks: 'css-custom'
			},
			css: {
				files: [ 'css/reveal.scss' ],
				tasks: 'css-core'
			},
			test: {
				files: [ 'test/*.html' ],
				tasks: 'test'
			},
			html: {
				files: root.map(path => path + '/*.html'),
				tasks: 'copy:html'
			},
			markdown: {
				files: root.map(path => path + '/*.md')
			},
			options: {
				livereload: true
			}
		}

	});

	// Default task
	grunt.registerTask( 'default', [ 'init', 'css', 'js' ] );

	// JS task
	grunt.registerTask( 'js', [ 'jshint', 'uglify', 'qunit' ] );

	// Theme CSS
	grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

	// Custom CSS
	grunt.registerTask( 'css-custom', [ 'sass:custom' ] );

	// clean dist
	grunt.registerTask( 'init', [ 'clean:build', 'copy:dist' ] );

	// Core framework CSS
	grunt.registerTask( 'css-core', [ 'sass:core', 'autoprefixer', 'cssmin' ] );

	// All CSS
	grunt.registerTask( 'css', [ 'sass', 'autoprefixer', 'cssmin' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', ['default', 'connect', 'watch' ] );

	// Run tests
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );
 
};
