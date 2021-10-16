import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { HomeComponent } from './home/home.component';
import { BusinessTripComponent } from './business-trip/business-trip.component';
import { BusinessTripService } from './services/businessTrip/business-trip.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DecoratorComponent,
    TravelDestinationsComponent,
    HomeComponent,
    BusinessTripComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BusinessTripService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
