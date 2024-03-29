import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myUser: User) { }

  getFirstName(): string {
    return this.myUser.getFirstName();
  }

  postFirstName(firstName: string) {
    this.myUser.setFirstName(firstName);
  }

  getLastName(): string {
    return this.myUser.getLastName();
  }

  postLastName(lastName: string) {
    this.myUser.setLastName(lastName);
  }

  getPseudo(): string {
    return this.myUser.getPseudo();
  }

  postPseudo(Pseudo: string) {
    this.myUser.setPseudo(Pseudo);
  }

  getPassword(): string {
    return this.myUser.getPassword();
  }

  postPassword(passcode: string) {
    this.myUser.setPassword(passcode);
  }
}
