import {NgModule} from '@angular/core';

import {CoreRoutingModule} from './core-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {RouteReusableStrategy} from './services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    CoreRoutingModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {
}
