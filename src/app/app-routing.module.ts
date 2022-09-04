import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'welcome', component: WelcomeComponent},
  { path:'login', component: LoginComponent},
  { path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGaurdService]},
  { path:'todos', component: ListTodosComponent, canActivate:[RouteGaurdService]},
  { path:'logout', component:LogoutComponent, canActivate:[RouteGaurdService]},
  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }