module.exports = function transform(arr) {
    let mass = arr;
    if (mass[0]=='--discard-prev'|| mass[0]=='--double-prev' || mass[mass.length-1]=='--double-next' || mass[mass.length-1] == '--discard-next') return mass;
    arr.forEach(function(item, i){
        if (item == '--discard-next') mass.splice(i, 2);
        if (item == '--discard-prev') mass.splice(i-1, 2);
        if (item == '--double-next') mass[i] = mass[i-1];
        if (item == '--double-prev') mass[i] = mass [i+1];

    })
    return mass;
};
