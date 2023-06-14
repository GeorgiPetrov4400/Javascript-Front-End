const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

const getFullName = person.fullName;
const anotherPerson = {
    firstName: 'Bob', 
    lastName: 'Smith'
};
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName());