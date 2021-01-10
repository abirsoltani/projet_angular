import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { UpdateVehiculeComponent } from './update-vehicule/update-vehicule.component';

const routes: Routes = [
  {path : "vehicule", component : VehiculeComponent },
  {path : "add-vehicule", component : AddVehiculeComponent },
  {path: "updateVehicule/:idVehicule", component: UpdateVehiculeComponent},
  {path : "", redirectTo: "vehicule", pathMatch: "full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
