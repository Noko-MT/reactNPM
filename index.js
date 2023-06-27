exports.calcularIMC = function (peso, altura) {
    return Number(peso) / Math.pow(Number(altura), 2);
}
//Coregir nombre funcion
exports.clasificarIMC = function (imc, genero) {
    let clasificacion = '';
    if (genero === 'M') {
        if (imc < 20.7) {
            clasificacion = 'Bajo peso';
        } else if (imc < 26.4) {
            clasificacion = 'Peso normal';
        } else if (imc < 27.8) {
            clasificacion = 'Sobrepeso';
        } else if (imc < 31.1) {
            clasificacion = 'Obesidad';
        } else {
            clasificacion = 'Obesidad mórbida'
        }
    } else if (genero === 'F') {
        if (imc < 19.1) {
            clasificacion = 'Bajo peso';
        } else if (imc < 25.8) {
            clasificacion = 'Peso normal';
        } else if (imc < 27.3) {
            clasificacion = 'Sobrepeso';
        } else if (imc < 32.3) {
            clasificacion = 'Obesidad';
        } else {
            clasificacion = 'Obesidad mórbida'
        }
    } else {
        throw new Error("El genero no es valido")
    }
    return clasificacion;
}
