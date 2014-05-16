/*jslint devel:true*/
/*global module, require*/

(function () {

    'use strict';

    var sys = require('sys'),
        exec = require('child_process').exec,
        defaults = require('lodash.defaults');
    
    module.exports = function (params) {

        var options = defaults(params || {}, {
            source: 'apple-touch-icon.png',
            sizes: [16, 32, 48, 64]
        }),
            command,
            i,
            size;

        function puts(error, stdout, stderr) {
            sys.puts(stdout);
        }

        command = 'convert ' + options.source + ' -bordercolor white -border 0 ';

        for (i = 0; i < options.sizes.length; i += 1) {
            size = options.sizes[i];
            command += '\\( -clone 0 -resize ' + size + 'x' + size + ' \\) ';
        }

        command += '-delete 0 -alpha off -colors 256 favicon.ico';

        exec(command, puts);

    };

}());