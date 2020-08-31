import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsNewComponent } from './locations/locations-new/locations-new.component';
import { LocationsListComponent } from './locations/locations-list/locations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationsNewComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
