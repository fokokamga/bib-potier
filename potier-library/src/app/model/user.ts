
export class User {
    // attributs
    private firstName = 'KAMGA';
    private lastName = 'Florin';
    private pseudo = 'HPotier2019';
    private password = 'test-xebia-front';

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

    getPseudo(): string {
        return this.pseudo;
    }

    setPseudo(pseudo: string) {
        this.pseudo = pseudo;
    }
    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }
}
