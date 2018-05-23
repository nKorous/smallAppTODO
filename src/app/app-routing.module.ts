import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetInfoComponent } from './get-info/get-info.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { componentFactoryName } from '@angular/compiler';
import { PagenotfoundComponent } from './error/pagenotfound.component';

const routes: Routes = [
  {path: '', component: GetInfoComponent, pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},

  //This must be last
  {path: '**', component: PagenotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
