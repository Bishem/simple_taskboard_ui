import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@app/core/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signUpForm  =  this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  signUp() {
    if (this.signUpForm.valid) {
      this.authService
        .attemptAuth(this.signUpForm.value, true)
        .then( () => {
          this.router.navigate(['']);
        }).catch(console.error);
    }
  }
}
