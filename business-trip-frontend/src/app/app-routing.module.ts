import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessTripComponent } from './business-trip/business-trip.component';
import { HomeComponent } from './home/home.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'traveldestinations', component: TravelDestinationsComponent },
  { path: 'businesstrips', component: BusinessTripComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
