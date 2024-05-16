import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'forgotten-password', component: ForgottenPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }