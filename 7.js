let nota = 85;
let letra;

if (nota >= 90 && nota <= 100) {
    letra = "A";
} else if (nota >= 80) {
    letra = "B";
} else if (nota >= 70) {
    letra = "C";
} else if (nota >= 60) {
    letra = "D";
} else if (nota >= 0) {
    letra = "F";
} else {
    letra = "Nota inválida";
}

console.log(letra);