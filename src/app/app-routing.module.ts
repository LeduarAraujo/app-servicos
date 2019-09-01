import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppFaqComponent } from './components/app-faq/app-faq.component';
import { AppCadastroComponent } from './components/app-cadastro/app-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent},
  { path: 'faq', component: AppFaqComponent},
  { path: 'cadastro', component: AppCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
