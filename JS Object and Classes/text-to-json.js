const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

let jsonString = JSON.stringify(person);
console.log(jsonString);

let personJsonToObject = JSON.parse(jsonString);
console.log(personJsonToObject);