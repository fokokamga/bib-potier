export class User {
    // attributs
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    constructor() { }

    // methodes getter setter

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }
    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }
}
