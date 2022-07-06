import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderComponent} from './components';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
