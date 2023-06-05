function formatGrades(grade) {
    if (grade >= 5.50) {
        return `Excellent ${formatToSecondDecimal(grade)}`;
    } else if (grade < 5.50 && grade >= 4.50) {
        return `Very Good ${formatToSecondDecimal(grade)}`;
    } else if (grade < 4.50 && grade >= 3.50) {
        return `Good ${formatToSecondDecimal(grade)}`;
    } else if (grade < 3.50 && grade >= 3.00) {
        return `Poor ${formatToSecondDecimal(grade)}`;
    } else {
        return `Fail ${formatToSecondDecimal(grade)}`;
    }

    function formatToSecondDecimal(grade) {
        return grade.toFixed(2);
    }

}

console.log(formatGrades(2.22));
console.log(formatGrades(3.33));
console.log(formatGrades(4.44));
console.log(formatGrades(4.88));
console.log(formatGrades(5.55));

