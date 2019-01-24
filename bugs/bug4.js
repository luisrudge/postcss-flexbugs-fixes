var postcss = require('postcss');

function shouldSetZeroBasis(basisValue) {
    if (!basisValue) {
        return false;
    }
    return basisValue === '0';
}

function properBasis(basis) {
    if (shouldSetZeroBasis(basis)) {
        return '0px';
    }
    return basis;
}

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        var values = postcss.list.space(decl.value);

        // set default values
        var flexGrow = '0';
        var flexShrink = '1';
        var flexBasis = '0px';

        if (values[0]) {
            flexGrow = values[0];
        }

        if (values[1]) {
            if (!isNaN(values[1])) {
                flexShrink = values[1];
            } else {
                flexBasis = values[1];
            }
        }

        if (values[2]) {
            flexBasis = values[2];
        }

        decl.value = flexGrow + ' ' + flexShrink + ' ' + properBasis(flexBasis);
    }
};
