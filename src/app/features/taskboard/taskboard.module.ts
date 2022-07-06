import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared';
import {TaskboardRoutingModule} from './taskboard-routing.module';
import {TaskboardComponent} from './pages';
import {
  AddTaskComponent,
  FooterComponent,
  HeaderComponent,
  ProfileComponent,
  TaskComponent,
  TaskListComponent
} from './components';

@NgModule({
  declarations: [
    TaskboardComponent,
    TaskComponent,
    AddTaskComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    TaskListComponent
  ],
  imports: [
    SharedModule,
    TaskboardRoutingModule
  ],
  exports: [
    TaskboardComponent
  ]
})
export class TaskboardModule {
}
