import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontPageComponent } from './components/front-page/front-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/front-page', pathMatch: 'full' },
  { path: 'front-page', component: FrontPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
