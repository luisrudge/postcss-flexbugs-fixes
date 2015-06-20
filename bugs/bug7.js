var postcss = require('postcss');

module.exports = function(decl) {
    var regex = /(\d{1,}) (\d{1,}) ([0-9]*\.?[0-9]+%)/g;
    if(decl.prop === 'box-sizing' && decl.value === 'border-box') {
        decl.parent.eachDecl(function(d) {
            var matches = regex.exec(d.value);
            if (d.prop === 'flex' && matches) {
                var flex = postcss.decl({
                    prop: 'flex',
                    value: matches[0].replace(/([0-9]*\.?[0-9]+%)/g, 'auto'),
                    source: decl.source
                });
                var width = postcss.decl({
                    prop: 'width',
                    value: matches[3],
                    source: decl.source
                });
                d.parent.insertBefore(d, flex);
                d.parent.insertBefore(d, width);
                d.removeSelf();
            }
        });
    }
};
