import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessTripComponent } from './business-trip/business-trip.component';
import { HomeComponent } from './home/home.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'travelDestinations', component: TravelDestinationsComponent },
  { path: 'businessTrips', component: BusinessTripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
