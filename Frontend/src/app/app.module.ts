import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/detail-property/property-detail.component';

const appRoutes: Routes = [
  {  path:'', component: PropertyListComponent},
  {  path:'rent-property', component: AddPropertyComponent},
  {  path:'property-detail/:id', component: PropertyDetailComponent},
  {  path:'add-property', component: AddPropertyComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
