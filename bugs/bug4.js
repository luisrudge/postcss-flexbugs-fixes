var postcss = require('postcss');

function shouldSetAutoBasis(basisValue) {
    return !basisValue || !basisValue.length;
}

function shouldSetZeroBasis(basisValue) {
    return basisValue === '0' || basisValue.replace(/\s/g, '') === '0px';
}

function properBasis(basis) {
    if (shouldSetAutoBasis(basis))
    {
        return 'auto';
    }
    if (shouldSetZeroBasis(basis)){
        return '0%';
    }
    return basis;
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
