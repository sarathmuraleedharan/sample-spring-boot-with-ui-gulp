module.exports = {
    app: 'src/main/resources/static/',
    dist: 'src/main/resources/prod',
    test: 'src/main/resources/static/test/javascript/',
    scss: 'src/main/resources/static/scss/',
    sassSrc: 'src/main/resources/static/scss/**/*.{scss,sass}',
    sassVendor: 'src/main/resources/static/scss/vendor.scss',
    cssDir: 'src/main/resources/static/content/css',
    bower: 'src/main/resources/static/bower_components/',
    tmp: 'tmp',
    revManifest: 'src/main/resources/static/tmp/rev-manifest.json',
    port: 9000,
    apiPort: 8080,
    liveReloadPort: 35729,
    uri: 'http://localhost:',
    constantTemplate:
        '(function () {\n' +
        '    \'use strict\';\n' +
        '    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n' +
        '    angular\n' +
        '        .module(\'<%- moduleName %>\')\n' +
        '<% constants.forEach(function(constant) { %>        .constant(\'<%- constant.name %>\', <%= constant.value %>)\n<% }) %>;\n' +
        '})();\n'
};