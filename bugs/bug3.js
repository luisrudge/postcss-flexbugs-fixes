var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'display' && decl.value === 'flex') {
        var minHeight;
        var height;
        decl.parent.eachDecl(function(d) {
            if (d.prop === 'min-height') {
                minHeight = d;
            } else if (d.prop === 'height') {
                height = d;
            }
        });
        if (minHeight && !height) {
            height = postcss.decl({
                prop: 'height',
                value: minHeight.value,
                source: decl.source
            });
            decl.parent.insertAfter(decl, height);
            minHeight.removeSelf();
        }
    }
};
