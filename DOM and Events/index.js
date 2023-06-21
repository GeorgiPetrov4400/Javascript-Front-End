// function sum() {
//     console.log(5 + 5);
// }

// sum();

const liElement = document.getElementsByTagName('li');
// const thirdLi = liElement[2];
// thirdLi.textContent += ' - This is DOM manipulation';

for (const li of liElement) {
    li.textContent += ' - This is DOM manipulation';
}