import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoAuthGuard, AuthGuard} from './guards';
import {LoginModule, TaskboardModule} from '@app/features';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'taskboard'},
  {/*canLoad: [AuthGuard], */path: 'taskboard', loadChildren: () => TaskboardModule},
  {canLoad: [NoAuthGuard], path: 'signIn', loadChildren: () => LoginModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
