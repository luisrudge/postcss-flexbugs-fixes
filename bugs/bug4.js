var postcss = require('postcss');

function shouldSetBasis(basisValue) {
    return !basisValue || basisValue === '0' || basisValue.replace(/\s/g, '') === '0px';
}

function properBasis(basis) {
    return shouldSetBasis(basis) ? '0%' : basis;
}

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        var values = postcss.list.space(decl.value);
        var flexGrow = values[0];
        var flexShrink = values[1];
        var flexBasis = values[2];
        decl.value = flexGrow + ' ' + (flexShrink || '1') + ' ' + properBasis(flexBasis);
    }
};
