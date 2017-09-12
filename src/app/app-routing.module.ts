import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontPageComponent } from './components/front-page/front-page.component';
import { AngularDirectivesComponent } from './components/angular-directives/angular-directives.component';
import { Mock1Component } from './components/mock-1/mock-1.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/front-page', pathMatch: 'full' },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'angular-directives', component: AngularDirectivesComponent },
  { path: 'mock-1', component: Mock1Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
