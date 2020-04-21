

exports.cToF = function (c) {
    const fah = c*9/5 + 32;
    return fah;
}

exports.fToC = function (f) {
    const cel = (f-32) * 5/9;
    return cel;
}
