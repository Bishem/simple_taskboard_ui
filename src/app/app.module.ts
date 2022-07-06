import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from '@app/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// todo check for serialization issues
// todo implement logging logic then replace console log

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
