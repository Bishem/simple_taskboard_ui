import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/core/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signInForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.signInForm.controls[controlName].hasError(errorName);
  }

  signIn() {
    if (this.signInForm.valid) {
      this.authService
        .attemptAuth(this.signInForm.value)
        .then( () => {
          this.router.navigate(['']);
        }).catch(console.error);
    }
  }

}
