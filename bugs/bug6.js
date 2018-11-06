var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        var values = postcss.list.space(decl.value);
        var flexGrow = values[0];
        var flexShrink = values[1] || '1';
        var flexBasis = values[2];
        if (flexGrow){
            var grow = postcss.decl({
                prop: 'flex-grow',
                value: flexGrow,
                source: decl.source
            });
            decl.parent.insertBefore(decl, grow);
        }
        if (flexShrink){
            var shrink = postcss.decl({
                prop: 'flex-shrink',
                value: flexShrink,
                source: decl.source
            });
            decl.parent.insertBefore(decl, shrink);
        }
        if (flexBasis){
            var grow = postcss.decl({
                prop: 'flex-basis',
                value: flexBasis,
                source: decl.source
            });
            decl.parent.insertBefore(decl, basis);
        }
        decl.remove();
    }
};
