import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfoilComponent } from './components/portfoil-edit/portfoil-edit.component';
import { PortfoilShowComponent } from './components/portfoil-show/portfoil-show.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'edit',component:PortfoilComponent,canActivate:[GuardGuard]},
  //{path:'edit',component:PortfoilComponent},
  {path:':username',component:PortfoilShowComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
