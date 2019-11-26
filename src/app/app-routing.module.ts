import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './componets/home/home.component';
import { DineroComponent } from './componets/dinero/dinero.component';
import { ModalComponent } from './componets/home/components/modal/modal.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dinero', component: DineroComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
