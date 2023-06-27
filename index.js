exports.suma = function (a, b) {
    return Number(a) + Number(b);
}

exports.resta = function (a, b) {
    return Number(a) - Number(b);
}

exports.multiplicacion = function (a, b) {
    return Number(a) * Number(b);
}

exports.division = function (a, b) {
    if (Number(b) === 0) {
        throw new Error("No se puede dividir por cero");
    } else {
        return Number(a) / Number(b);
    }
}