var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        if (decl.value === 'initial') {
            decl.value = '0 1 auto';
            return;
        }
        var values = postcss.list.space(decl.value);
        var flexGrow = values[0];
        var flexShrink = values[1] || '1';
        var flexBasis = values[2] || 'auto';
        // Safari seems to hate '0%' and the others seems to make do with a nice value when basis is missing,
        // so if we see a '0%' or '0px', normalize it to '0'.
        if (flexBasis === '0%' || flexBasis === '0px') flexBasis = '0';
        decl.value = flexGrow + ' ' + flexShrink + ' ' + flexBasis;
    }
};
