module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      myTask: {
        files: {
          'app.min.js' :
          [
          'Member.js',
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [ 'uglify' ]);
};
