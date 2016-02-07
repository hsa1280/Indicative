module.exports = function(grunt) {
	grunt.initConfig({
		browserify:{
			dist:{
				options:{
					transform:[['babelify',{'loose':"all"}]],
					browserifyOptions: {
						debug: true
					}
				},
				files: {
					'src/main/webapp/appbuild.js':['src/main/webapp/views/*.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify']);
};