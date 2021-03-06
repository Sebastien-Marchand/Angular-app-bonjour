import { Component, OnInit } from '@angular/core';
import { listeMatricule } from '../mock/matricule.mock';
import {DataService} from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

	listeMatricules = [];
	msgErreur: string;
	
		constructor(private dataService: DataService) {
		}
		 boolBouton = false;
		 ngOnInit(): void {
		}

//search(nomCollegue: string){
	search(){
		this.listeMatricules = listeMatricule;
  }
  searchObservable(nom:string){
		this.dataService.rechercherParNom(nom)
		.subscribe(leMatricule => this.listeMatricules = leMatricule,
		error => {}
		);
  }
  
  afficherCollegue(matricule: string){
      this.dataService.recupererCollegueCourant(matricule)
      .subscribe(() => {},
      (erreur: HttpErrorResponse) => this.msgErreur = 'Oops....')
    } 
}
