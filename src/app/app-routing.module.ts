import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstNavigationComponent } from './first-navigation/first-navigation.component';
import { SecondNavigationComponent } from './second-navigation/second-navigation.component';

const routes: Routes = [
  { path: 'first', component: FirstNavigationComponent },
  { path: 'second', component: SecondNavigationComponent },
  { path: '**', redirectTo: 'first' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
