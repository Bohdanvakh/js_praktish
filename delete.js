class User {
    constructor(email, name, birthDate) {
        this.email = email;
        this.name = name;
        this.birthDate = birthDate;
    }
}

const user = new User('my@gmail.com', 'John Doe', '10.08.2001');

// console.log(user);

delete user.name;

console.log(user); // it returns: User { email: 'my@gmail.com', birthDate: '10.08.2001' }