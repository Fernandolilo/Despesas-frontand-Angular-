import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
 
  {path:'', component: LoginComponent},
 
  {path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () => 
     import ('./view/home/home.module')
     .then(m => m.HomeModule
       ),
     },
     {path: '**', redirectTo: ''}
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes, {useHash: true})],
   exports: [RouterModule]
 })
 export class AppRoutingModule {}