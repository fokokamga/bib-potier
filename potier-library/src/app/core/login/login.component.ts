import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myPseudo: string;
  myPassword: string;
  userForm: FormGroup;
  private readonly notifier: NotifierService;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              notifierService: NotifierService) {
                this.notifier = notifierService;
               }

  ngOnInit() {
    this.initForm(); // on initialise le formulaire
    this.myPseudo = this.userService.getPseudo();
    this.myPassword = this.userService.getPassword();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    if (formValue.pseudo === this.myPseudo && formValue.password === this.myPassword) {
      this.router.navigate(['books']);
      console.log('Login success');
    } else {
      this.router.navigate(['']);
      this.notifier.notify( 'error', 'Le pseudo ou/et le mot de passe sont incorrects !' );
    }

  }

}
