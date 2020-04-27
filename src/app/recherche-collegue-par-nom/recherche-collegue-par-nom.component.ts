import { Component, OnInit } from '@angular/core';
import { listeMatricule } from '../mock/matricule.mock';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

	listeMatricules = [];
	matricules = [];
		constructor(private dataService: DataService) {
		}
		 boolBouton = false;
		 ngOnInit(): void {
		}

//search(nomCollegue: string){
	search(){
		this.listeMatricules = listeMatricule;
  }
  
  

}
