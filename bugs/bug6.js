var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        var list = postcss.list.space(decl.value);
        var values = ['0', '1', '0%'];
        list.reduce(function (obj, value, key) {
            if (/%/.test(value) || /px/.test(value)) {
                values[2] = value.replace(/px/, '%');
            } else {
                values[key] = value;
            }
            return obj;
        }, list);
        var flexGrow = values[0];
        var flexShrink = values[1];
        var flexBasis = values[2];
        if(flexBasis === '0px' || flexBasis === '0') flexBasis = '0%';
        decl.value = flexGrow + ' ' + flexShrink + ' ' + flexBasis;
    }
};
