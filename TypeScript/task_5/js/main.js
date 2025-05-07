function sumMajorCredits(subject1, subject2) {
    var sum = subject1 + subject2;
    return {
        credits: sum,
        brand: 'major'
    };
}
function sumMinorCredits(subject1, subject2) {
    var sum = subject1 + subject2;
    return {
        credits: sum,
        brand: "minor"
    };
}
// Crear dos conjuntos de créditos para MajorCredits
var majorSubject1 = { credits: 30, brand: "major" };
var majorSubject2 = { credits: 20, brand: "major" };
// Crear dos conjuntos de créditos para MinorCredits
var minorSubject1 = { credits: 15, brand: "minor" };
var minorSubject2 = { credits: 10, brand: "minor" };
// Sumar los créditos de MajorCredits
var totalMajorCredits = sumMajorCredits(majorSubject1.credits, majorSubject2.credits);
console.log("Total Major Credits: ".concat(totalMajorCredits.credits)); // Output: Total Major Credits: 50
// Sumar los créditos de MinorCredits
var totalMinorCredits = sumMinorCredits(minorSubject1.credits, minorSubject2.credits);
console.log("Total Minor Credits: ".concat(totalMinorCredits.credits)); // Output: Total Minor Credits: 25
