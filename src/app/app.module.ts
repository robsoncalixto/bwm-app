import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { RentalModule } from './rental/rental.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commom/header/header.component';
import { TempComponent } from './temp/temp.component';
import { MapComponent } from './common/map/map.component';




const appRoutes: Routes = [
    {path: '', redirectTo: '/rentals', pathMatch: 'full' },
    {path: 'temp', component: TempComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    TempComponent, MapComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
