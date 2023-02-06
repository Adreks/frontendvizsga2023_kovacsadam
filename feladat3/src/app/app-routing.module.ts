import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumorComponent } from './humor/humor.component';
import { ScifiComponent } from './scifi/scifi.component';

const appRoutes: Routes = [
  { path: 'scifi', component: ScifiComponent },
  { path: 'humor', component: HumorComponent },
  { path: '', redirectTo: '/scifi', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }