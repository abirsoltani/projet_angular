import { Component, OnInit } from '@angular/core';
import { VehiculeComponent } from '../vehicule/vehicule.component';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from '../services/vehicule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html'
})
export class AddVehiculeComponent implements OnInit {
  
  newVehicule = new Vehicule();
   message : string;
  constructor(private vehiculeService: VehiculeService, private router :Router) { }

  ngOnInit(): void {
  }
  addVehicule(){
    this.vehiculeService.ajouterVehicule(this.newVehicule)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['vehicules']).then(() => {
      window.location.reload();
      });
}
}
