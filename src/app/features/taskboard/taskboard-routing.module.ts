import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskboardComponent} from '@app/features/taskboard/pages';

const routes: Routes = [
  {path: '', component: TaskboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule {
}
