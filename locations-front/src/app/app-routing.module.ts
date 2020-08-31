import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { AppComponent } from './app.component';
import { LocationsNewComponent } from './locations/locations-new/locations-new.component';
import { LocationsListComponent } from './locations/locations-list/locations-list.component';


const routes: Routes = [
  { path: 'list/:id', component: LocationsListComponent },
  { path: 'new', component: LocationsNewComponent },
  { path: 'new/:parentId', component: LocationsNewComponent },
  { path: '', component:  LocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
