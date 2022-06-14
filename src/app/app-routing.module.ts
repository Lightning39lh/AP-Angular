import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfoilComponent } from './components/portfoil/portfoil.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'me',component:PortfoilComponent},
  {path:'edit',component:PortfoilComponent,canActivate:[GuardGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
