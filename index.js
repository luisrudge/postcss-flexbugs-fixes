var postcss = require('postcss');
var bug8 = require('./bugs/bug8');

module.exports = postcss.plugin('postcss-flexbugs-fixes', function(opts) {
    opts = opts || {};

    return function(css) {
        css.eachDecl(function(d) {
            bug8(d);
        });
    };
});
