import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';





export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'flights', component: FlightsComponent },
  { path: 'flight-card/:numero_volo', component: FlightCardComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
