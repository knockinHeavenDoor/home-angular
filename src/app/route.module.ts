import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
/**
 * Created by xuhui on 2017/10/20.
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
