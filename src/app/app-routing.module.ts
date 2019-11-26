import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './componets/home/home.component';
import { DineroComponent } from './componets/dinero/dinero.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dinero', component: DineroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
