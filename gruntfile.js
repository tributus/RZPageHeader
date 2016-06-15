/**
 * Created by anderson.santos on 13/06/2016.
 */
module.exports = function (grunt) {
    grunt.initConfig({
            options: {
                srcFiles: [
                    // "src/NamespaceDeclares.js",
                    "src/InterfaceAndEvents.js",
                    "src/PageHeaderWidget.js"
                ]
            },
            concat: {
                dist: {
                    src: ['<%= options.srcFiles %>'],
                    dest: "dist/PageHeaderWidget.js"
                }
            },
            uglify: {
                options: {
                    mangle: false
                },
                my_target: {
                    files: {
                        "dist/PageHeaderWidget.min.js": ['dist/PageHeaderWidget.js']
                    }
                }
            },
            less: {
                default: {
                    options: {
                        compress: false
                    },
                    files: {
                        'dist/PageHeaderWidget.css': 'src/style/style.less'
                    }
                },
                compact: {
                    options: {
                        compress: true
                    },
                    files: {
                        'dist/PageHeaderWidget.min.css': 'src/style/style.less'
                    }
                }
            }
        }
    );
// Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['concat', 'uglify','less']);

};