import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './pages';
import {SignInComponent, SignUpComponent} from './components';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {
}
