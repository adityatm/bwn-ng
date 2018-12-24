import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
  {path: 'temp', component: TempComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
