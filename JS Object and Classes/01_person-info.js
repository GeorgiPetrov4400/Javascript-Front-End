function personInfo(firstName, lastName, age) {
    age = Number(age);
    let person = { firstName, lastName, age, sayHello: function() {
        return `${this.firstName} ${this.lastName}`
    } };

    console.log(person.sayHello());

    return person;
}

console.log(personInfo("Peter", "Pan", "20"));