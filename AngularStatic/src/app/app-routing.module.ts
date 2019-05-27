import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {TodosComponent} from './todos/todos.component';
import {LogoutComponent} from './logout/logout.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
	{path:'', component:LoginComponent},
	{path:'login', component:LoginComponent},
	{path:'welcome/:name', component:WelcomeComponent},
    {path: 'todos',component:TodosComponent},
    {path: 'logout',component:LogoutComponent},
    {path: 'update/:compId',component:UpdateComponent},
	{path:'**', component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
