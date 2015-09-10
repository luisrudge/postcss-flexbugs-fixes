module.exports = function(decl) {
    if (decl.prop === 'flex') {
        if(decl.value === 'none'){
            return;
        }
    }
};
