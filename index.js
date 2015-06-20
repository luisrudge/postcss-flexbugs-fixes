var postcss = require('postcss');
var bug3 = require('./bugs/bug3');
var bug81a = require('./bugs/bug81a');

module.exports = postcss.plugin('postcss-flexbugs-fixes', function(opts) {
    opts = opts || {};

    return function(css) {
        css.eachDecl(function(d) {
            bug3(d);
            bug81a(d);
        });
    };
});
