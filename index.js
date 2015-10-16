var postcss = require('postcss');
var bug4 = require('./bugs/bug4');
var bug6 = require('./bugs/bug6');
var bug81a = require('./bugs/bug81a');

module.exports = postcss.plugin('postcss-flexbugs-fixes', function(opts) {
    opts = opts || {};

    return function(css) {
        css.walkDecls(function(d) {
            bug4(d);
            bug6(d);
            bug81a(d);
        });
    };
});
